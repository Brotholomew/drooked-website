/**
 * Delegated analytics events for outbound interactions.
 *
 * A single document-level listener keeps the events working for content
 * rendered later (vault pages, product rows) without per-link handlers.
 *
 * Priority order avoids double counting:
 *   1. affiliate link   -> `affiliate_click`
 *   2. mailto:          -> `contact_click`
 *   3. social icon      -> `social_click`
 *   4. other external `_blank` link -> `outbound_click`
 *
 * Nothing is sent when gtag is absent (no `PUBLIC_GA_ID` at build time).
 */

function send(name: string, params: Record<string, unknown>): void {
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}

function isExternal(url: URL): boolean {
  return (
    (url.protocol === 'http:' || url.protocol === 'https:') &&
    url.origin !== window.location.origin
  );
}

document.addEventListener('click', (event) => {
  if (event.defaultPrevented) return;

  const anchor = (event.target as Element | null)?.closest('a');
  if (!anchor) return;

  const href = anchor.getAttribute('href');
  if (!href || href.startsWith('#')) return;

  const productId = anchor.dataset.productId;
  const storefrontId = anchor.dataset.storefrontId;

  // Product detail link rows carry both ids; product cards only carry the
  // product id and are internal navigation, so they are ignored here.
  if (productId && storefrontId) {
    send('affiliate_click', {
      product_id: productId,
      storefront_id: storefrontId,
      affiliated: anchor.dataset.affiliated === 'true',
      link_url: anchor.href,
    });
    return;
  }

  if (href.toLowerCase().startsWith('mailto:')) {
    send('contact_click', { link_url: anchor.href });
    return;
  }

  const network = anchor.dataset.network;
  if (network) {
    send('social_click', { network });
    return;
  }

  let url: URL;
  try {
    url = new URL(anchor.href, window.location.href);
  } catch {
    return;
  }

  if (anchor.target === '_blank' && isExternal(url)) {
    send('outbound_click', { link_url: url.href });
  }
});
