# Analytics

droocked.origins uses **Google Analytics 4** directly through the `gtag.js`
snippet. There is no Google Tag Manager container and no client-side framework
tracking. This document covers the production property, the build variable, the
events, consent behaviour, and how to verify a deployment.

Related: [`utm.md`](./utm.md) for the campaign link convention.

## Property and data stream

| Item | Value |
|---|---|
| Product | Google Analytics 4 |
| Measurement ID | `G-SZ67XVNMM4` |
| Web data stream | `origins.droocked.com` |
| Stream URL | `https://origins.droocked.com` |
| Tag method | `gtag.js`, loaded from `googletagmanager.com` |
| GTM container | none — `GTM-PRTDMSPR` is not used anywhere |

The stream measures normal full page loads. The site is statically generated, so
there is no SPA virtual-pageview workaround: one HTML document equals one page
view.

Do not add a GTM container later without also updating the privacy page and this
document.

## Build variable

The measurement ID is injected at build time:

```text
PUBLIC_GA_ID=G-SZ67XVNMM4
```

- `src/components/Analytics.astro` renders nothing unless
  `import.meta.env.PUBLIC_GA_ID` is set.
- There is **no hardcoded default**. Local development, preview builds, and CI
  builds without the variable contain no analytics markup and never contact the
  production property.
- Stage 9 sets the variable in the deploy workflow environment (repository
  variable or workflow `env`). Add it there, not in a committed `.env` file.
- To test locally, pass it explicitly:

  ```bash
  PUBLIC_GA_ID=G-SZ67XVNMM4 npm run build
  npm run preview
  ```

Anything built without the variable is safe to share; anything built with it
sends production analytics once a visitor accepts.

## Consent behaviour (Consent Mode v2)

`Analytics.astro` emits the consent default before the GA4 configuration, and
`src/scripts/consent.ts` owns the banner. Storage key: `droocked-consent` in
`localStorage`, values `granted` or `denied`.

1. **Default (no choice yet).** `ad_storage`, `ad_user_data`,
   `ad_personalization`, and `analytics_storage` are all set to `denied` before
   `gtag('config', …)` runs. No analytics cookies are written.
2. **Earlier choice is `granted`.** The inline script reads `localStorage`
   before configuring GA4 and sends
   `gtag('consent', 'update', { analytics_storage: 'granted' })` immediately.
   The banner stays hidden.
3. **Accept.** The banner stores `granted`, sends the same consent update, and
   hides. `_ga` / `_ga_*` cookies may then be set.
4. **Decline.** The banner stores `denied`, sends
   `gtag('consent', 'update', { analytics_storage: 'denied' })`, deletes
   existing `_ga` / `_ga_*` cookies on this host, and hides. Ad signals remain
   denied.
5. **Reopen.** Any `[data-consent-open]` control (footer `cookie settings`,
   privacy page button) shows the banner again and focuses **accept**; the
   visitor can change the choice in either direction. Focus returns to the
   control after the banner closes.
6. **No analytics build.** Without `PUBLIC_GA_ID`, `window.gtag` does not exist.
   Accept and Decline still persist the choice and hide the banner; the reopen
   controls still work.

The banner is a fixed bottom plate, not a modal. It does not trap focus, does not
lock scrolling, and does not change the homepage no-scroll layout.

With consent denied, GA4 does not store identifiers or place cookies. Google may
still receive cookieless consent-state signals; the privacy page describes this.

## Events

`src/scripts/analytics-events.ts` uses one delegated `click` listener on
`document`, so vault and product content work without per-link handlers. Events
are only sent when `window.gtag` exists.

| Event | Fires on | Parameters |
|---|---|---|
| `page_view` | every page load | GA4 automatic |
| `affiliate_click` | product detail link row (an `<a>` with both `data-product-id` and `data-storefront-id`) | `product_id`, `storefront_id`, `affiliated` (boolean), `link_url` |
| `contact_click` | any `mailto:` link | `link_url` |
| `social_click` | any link with `data-network` | `network` (`instagram`, `tiktok`, `youtube`, `mail`) |
| `outbound_click` | other external `http(s)` links with `target="_blank"` | `link_url` |

Priority is affiliate → `mailto:` → social → outbound. That order prevents
double counting:

- the mail icon carries `data-network="mail"` but is a `mailto:` link, so it
  reports `contact_click`;
- product index cards carry `data-product-id` but are internal navigation and
  are not counted as `affiliate_click`; only the storefront rows on a product
  detail page have both ids;
- an affiliate link is not also counted as `outbound_click`;
- a social icon is not also counted as `outbound_click`.

Add the four event parameters as **event-scoped custom dimensions** if they
should appear in GA4 reports (Admin → Data display → Custom definitions):

| Dimension name | Event parameter | Scope |
|---|---|---|
| Product ID | `product_id` | Event |
| Storefront ID | `storefront_id` | Event |
| Affiliate | `affiliated` | Event |
| Social network | `network` | Event |
| Link URL | `link_url` | Event |

UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`,
`utm_id`) are collected automatically as session-scoped traffic-source fields;
no custom dimension is needed for them.

## Conversions

Mark these as **key events** (Admin → Events → Key events):

- `affiliate_click`
- `contact_click`
- `social_click`

`outbound_click` is diagnostic only; do not mark it as a key event. `page_view`
is not a conversion.

Because the site has no forms and no checkout, there is nothing else to mark.
Affiliate revenue, if it starts, is measured in the affiliate network and joined
to GA4 only through campaign ids, not through a purchase event on this site.

## Custom channel groups

Traffic with `utm_medium=full_length` or `utm_medium=reel` shows as
**Unassigned** in the default channel group. Create two custom groups (Admin →
Data display → Channel groups):

| Group | Condition |
|---|---|
| **Long-form** | Session medium exactly matches `full_length` |
| **Short-form / Reels** | Session medium exactly matches `reel` |

Everything else keeps the default grouping: `utm_medium=social` with
`instagram`, `tiktok`, or `youtube` lands in **Organic Social**. The exact
spellings must match; see [`utm.md`](./utm.md).

## Data retention

Set the event data retention to **14 months** in the GA4 property (Admin → Data
settings → Data retention). It is a property setting, not site code. The privacy
page states the same period.

## Verification

### Realtime and DebugView with a UTM link

1. Build with the measurement ID and serve the preview:

   ```bash
   PUBLIC_GA_ID=G-SZ67XVNMM4 npm run build
   npm run preview
   ```

2. Open the preview URL, accept analytics in the banner.
3. Open a canonical UTM link (use the preview host with the same path and
   parameters, e.g. `http://localhost:4321/products/snapmaker-u1/?utm_source=youtube&utm_medium=full_length&utm_campaign=u1_1&utm_content=desc_link&utm_id=yt_f_u1_1_desc`).
4. In GA4, open **Reports → Realtime** and check the page view appears with
   `utm_source=youtube`, `utm_medium=full_length`, `utm_campaign=u1_1`.
5. For **Admin → DebugView**, enable debugging with the Google Analytics
   Debugger browser extension or Tag Assistant. The site does not emit a
   `debug_mode` parameter itself, so DebugView only shows data while debugging
   is enabled in the browser.

DebugView/Realtime may take a few seconds. Consent must be granted; with denied
storage, GA4 will not report the visit as a normal session.

### Quick checks in the page

| Check | Expected |
|---|---|
| Network request to `googletagmanager.com/gtag/js` | contains `id=G-SZ67XVNMM4` |
| Network requests containing `GTM-` | none |
| Cookies before Accept | no `_ga`, no `_ga_*` |
| `localStorage['droocked-consent']` after Accept | `granted` |
| Banner after reload | hidden |
| Footer `cookie settings` | shows the banner again |
| Clicking a social icon | `social_click` in the GA4 request / DebugView |
| Clicking a `mailto:` link | `contact_click` |
| Clicking an external `target="_blank"` link | `outbound_click` |

### Manual GA4 setup still required

These are property settings in the Google UI, not code:

1. Create the web data stream for `origins.droocked.com` if it does not exist,
   and confirm its measurement ID is `G-SZ67XVNMM4`.
2. Set data retention to 14 months.
3. Create the **Long-form** and **Short-form / Reels** custom channel groups.
4. Register the event-scoped custom dimensions listed above.
5. Mark `affiliate_click`, `contact_click`, and `social_click` as key events.
6. Keep Google Signals, ads personalization, and advertising products disabled
   to match the privacy page.
7. Exclude internal traffic if the GA4 property will ever be opened from the
   production domain for testing, or use a separate debug stream.
