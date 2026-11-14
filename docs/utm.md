# UTM convention

Every link that droocked.origins posts outside the site carries the same five
campaign parameters. They let GA4 attribute a visit to the exact video, Short,
Reel, bio link, or QR code that produced it, instead of lumping everything into
"direct" or "referral".

The scheme is deliberately split by field. One field answers one question:

| Field | Question it answers | Allowed values |
|---|---|---|
| `utm_source` | Which platform did the click come from? | `youtube`, `instagram`, `tiktok` |
| `utm_medium` | What kind of content was it? | `full_length`, `reel`, `social` |
| `utm_campaign` | Which launch or topic? | `u1_1`, `u1_2`, `filaments_01`, … |
| `utm_content` | Where on the platform was the link? | `desc_link`, `qr`, `bio` |
| `utm_id` | Which exact link is this? | `yt_f_u1_1_desc`, `yt_sh_u1_1_desc`, … |

`utm_term` is not used. Do not invent new values for source, medium, or content
without updating this document and `scripts/utm.mjs`; GA4 reports and the custom
channel groups below depend on the exact spellings.

Rules for all values:

- lowercase ASCII only;
- words joined by single underscores, never spaces, hyphens, or plus signs;
- a campaign or id is written once and never renamed after it is published —
  rename it and historical reports split into two rows.

## Generating a link

`scripts/utm.mjs` builds and validates links:

```bash
node scripts/utm.mjs \
  --path /products/snapmaker-u1/ \
  --source youtube \
  --medium full_length \
  --campaign u1_1 \
  --content desc_link \
  --id yt_f_u1_1_desc
```

Output:

```text
https://origins.droocked.com/products/snapmaker-u1/?utm_source=youtube&utm_medium=full_length&utm_campaign=u1_1&utm_content=desc_link&utm_id=yt_f_u1_1_desc
```

`npm run utm -- --path ...` does the same thing. Use `--table` to print the
canonical examples and `--help` for usage. `--base` exists only for testing
against another host.

The generator rejects an unknown source, medium, or content, and normalises
paths to a trailing slash. It also warns when an id does not start with the
prefix expected for its source and medium.

## The id scheme

`utm_id` is a compact, human-readable identifier. Its shape is:

```text
<platform>_<format>_<campaign>_<placement>
```

| Token | Meaning |
|---|---|
| `yt` | YouTube |
| `ig` | Instagram |
| `tt` | TikTok |
| `f` | full-length video |
| `sh` | YouTube Short |
| `r` | Reel |
| `desc` | link in the description |
| `qr` | QR code |
| `bio` | link in bio |

Examples:

```text
yt_f_u1_1_desc    YouTube full-length, campaign u1_1, description link
yt_sh_u1_1_desc   YouTube Short, campaign u1_1, description link
ig_r_u1_1_desc    Instagram Reel, campaign u1_1, description link
tt_r_u1_1_desc    TikTok Reel, campaign u1_1, description link
yt_f_u1_1_qr      YouTube full-length, campaign u1_1, QR code
ig_bio            Instagram profile bio link
```

The Instagram bio link keeps the short id `ig_bio` because the profile holds one
stable destination; the `utm_campaign` field still records which launch is being
measured at the time.

## Canonical examples

| Placement | URL |
|---|---|
| YouTube full-length, description | `https://origins.droocked.com/products/snapmaker-u1/?utm_source=youtube&utm_medium=full_length&utm_campaign=u1_1&utm_content=desc_link&utm_id=yt_f_u1_1_desc` |
| YouTube Short, description | `https://origins.droocked.com/products/snapmaker-u1/?utm_source=youtube&utm_medium=reel&utm_campaign=u1_1&utm_content=desc_link&utm_id=yt_sh_u1_1_desc` |
| Instagram bio | `https://origins.droocked.com/?utm_source=instagram&utm_medium=social&utm_campaign=u1_1&utm_content=bio&utm_id=ig_bio` |
| QR code in a video | `https://origins.droocked.com/products/snapmaker-u1/?utm_source=youtube&utm_medium=full_length&utm_campaign=u1_1&utm_content=qr&utm_id=yt_f_u1_1_qr` |
| TikTok Reel, description | `https://origins.droocked.com/products/snapmaker-u1/?utm_source=tiktok&utm_medium=reel&utm_campaign=u1_1&utm_content=desc_link&utm_id=tt_r_u1_1_desc` |

Generate these with `node scripts/utm.mjs --table`.

## Why not pack everything into utm_source

It is tempting to write `utm_source=youtube_full_length_u1_1_desc`. Do not.
Every packed variant becomes its own source in GA4, so:

- the **Traffic acquisition** report fragments into dozens of one-off sources;
- the **Session source / medium** dimension becomes unreadable and cannot be
  filtered by platform anymore;
- default channel grouping stops working, because grouping depends on the
  medium (`social`, `referral`, `organic`, …), not on a compound source string;
- campaign reports cannot total all traffic for `u1_1`, because the campaign
  name is buried inside another field;
- comparing a Short and a full-length video needs string matching instead of a
  clean `medium` filter.

Each field has a reporting job. Keep them separate.

## GA4 custom channel groups

GA4's default channel group does not know `full_length` or `reel`, so traffic
with those mediums appears as **Unassigned**. Create two custom channel groups
in the GA4 property (Admin → Data display → Channel groups):

| Group | Condition |
|---|---|
| **Long-form** | Session medium exactly matches `full_length` |
| **Short-form / Reels** | Session medium exactly matches `reel` |

The rest stays on the default grouping:

- `utm_source=instagram` or `tiktok` with `utm_medium=social` → **Organic Social**;
- `utm_source=youtube` with `utm_medium=social` → **Organic Social**;
- direct and search traffic is unaffected.

Use the custom groups in the acquisition reports. The conditions must match the
spellings exactly; `full-length` or `Full_length` will not match.

## Never UTM internal links

Never add `utm_*` parameters to a link that points to another page on
origins.droocked.com. A UTM parameter on an internal link:

- starts a **new session** in GA4 and breaks the original session;
- overwrites the true source, medium, and campaign of the visit, so the content
  that actually brought the visitor loses credit;
- turns the internal click into a fake campaign touchpoint.

Internal links are already measured by page views and by the events in
[`analytics.md`](./analytics.md). Use those, not UTMs. UTMs belong only on links
posted on other platforms or embedded in QR codes.

The same applies to links inside the knowledgebase, footer, navigation, and
product cards: no UTM parameters, ever.

## Checklist before publishing a link

1. Pick the destination path and confirm it returns 200 with a trailing slash.
2. Run `node scripts/utm.mjs` with the campaign values.
3. Put the printed URL into the video description, bio, or QR generator.
4. Open the link once in a private window with consent accepted and confirm the
   page view appears in GA4 Realtime with the expected source/medium/campaign.
5. Record the id in the campaign notes so it is never reused for a different
   placement.

Related: [`analytics.md`](./analytics.md) for the GA4 property, events, consent
behaviour, and verification.
