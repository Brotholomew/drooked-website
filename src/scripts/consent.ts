/**
 * Cookie consent for Google Analytics 4.
 *
 * The choice is stored in localStorage under `droocked-consent` as
 * `granted` or `denied`. The banner is a bottom plate that can be reopened
 * from any `[data-consent-open]` control (footer legal row, privacy page).
 *
 * Everything degrades gracefully when `PUBLIC_GA_ID` is absent and
 * therefore `window.gtag` does not exist: the choice is still persisted and
 * the banner still opens and closes.
 */

const STORAGE_KEY = 'droocked-consent';

type ConsentChoice = 'granted' | 'denied';

const banner = document.querySelector<HTMLElement>('[data-consent-banner]');
const acceptButton = document.querySelector<HTMLButtonElement>(
  '[data-consent-accept]',
);
const declineButton = document.querySelector<HTMLButtonElement>(
  '[data-consent-decline]',
);

let lastTrigger: HTMLElement | null = null;

function readChoice(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

function storeChoice(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Private mode or blocked storage: the banner will ask again next visit.
  }
}

function updateConsent(choice: ConsentChoice): void {
  window.gtag?.('consent', 'update', { analytics_storage: choice });
}

function hideBanner(): void {
  if (!banner) return;
  banner.hidden = true;

  if (lastTrigger && document.contains(lastTrigger)) {
    lastTrigger.focus();
  }
  lastTrigger = null;
}

function showBanner(moveFocus: boolean): void {
  if (!banner) return;
  banner.hidden = false;

  if (moveFocus) {
    acceptButton?.focus();
  }
}

/** Remove GA cookies when consent is withdrawn, so the opt-out is immediate. */
function clearAnalyticsCookies(): void {
  const host = window.location.hostname;
  const domains = ['', `; domain=${host}`, `; domain=.${host}`];

  for (const part of document.cookie.split(';')) {
    const name = part.split('=')[0]?.trim();
    if (!name) continue;
    if (name !== '_ga' && !name.startsWith('_ga_')) continue;

    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
    }
  }
}

function choose(choice: ConsentChoice): void {
  storeChoice(choice);
  updateConsent(choice);

  if (choice === 'denied') {
    clearAnalyticsCookies();
  }

  hideBanner();
}

acceptButton?.addEventListener('click', () => choose('granted'));
declineButton?.addEventListener('click', () => choose('denied'));

document.addEventListener('click', (event) => {
  const trigger = (event.target as Element | null)?.closest<HTMLElement>(
    '[data-consent-open]',
  );
  if (!trigger) return;

  event.preventDefault();
  lastTrigger = trigger;
  showBanner(true);
});

// First visit: ask. Returning visit: respect the stored choice silently.
if (banner) {
  if (readChoice() === null) {
    showBanner(false);
  } else {
    banner.hidden = true;
  }
}
