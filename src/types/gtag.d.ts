/**
 * gtag.js globals.
 *
 * The inline bootstrap in `Analytics.astro` defines `window.gtag`; these
 * declarations let the consent and event scripts call it without `any`.
 * `gtag` stays optional because builds without `PUBLIC_GA_ID` never define it.
 */
interface Window {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
}
