/**
 * Left ruler
 *
 * The strip is anchored to the document coordinate system. `unit` is the
 * number of CSS pixels per blueprint unit (3840 units across the viewport),
 * so every label is a real vertical coordinate. Scrolling only changes the
 * strip transform; the DOM is rebuilt on resize or document height changes.
 */

const TICK_START = 40;
const TICK_STEP = 40;
const LABEL_START = 104;
const LABEL_STEP = 400;
const MOBILE_LABEL_STEP = 800;
const MOBILE_BREAKPOINT = 640;
const OVERSCAN_UNITS = 400;

const strip = document.querySelector<HTMLElement>('[data-left-ruler-strip]');

let unit = 0;
let frameRequest = 0;
let rebuildRequest = 0;

const labelStep = () =>
  window.innerWidth < MOBILE_BREAKPOINT ? MOBILE_LABEL_STEP : LABEL_STEP;

const createTick = (units: number, major: boolean): HTMLElement => {
  const tick = document.createElement('span');
  tick.className = major
    ? 'left-ruler__tick left-ruler__tick--major'
    : 'left-ruler__tick';
  tick.style.top = `${units * unit}px`;
  return tick;
};

const createLabel = (units: number): HTMLElement => {
  const label = document.createElement('span');
  label.className = 'left-ruler__label';
  const text = String(units);
  if (text.length > 4) {
    label.classList.add('left-ruler__label--long');
  }
  label.style.top = `${units * unit}px`;
  label.textContent = text;
  return label;
};

const applyTransform = () => {
  frameRequest = 0;
  if (!strip) return;
  strip.style.transform = `translate3d(0, ${-window.scrollY}px, 0)`;
};

const scheduleTransform = () => {
  if (frameRequest) return;
  frameRequest = window.requestAnimationFrame(applyTransform);
};

const build = () => {
  rebuildRequest = 0;
  if (!strip) return;

  unit = window.innerWidth / 3840;
  if (!Number.isFinite(unit) || unit <= 0) return;

  const step = labelStep();
  const maxUnits =
    document.documentElement.scrollHeight / unit + OVERSCAN_UNITS;

  const labelUnits: number[] = [];
  for (let units = LABEL_START; units <= maxUnits; units += step) {
    labelUnits.push(units);
  }

  const tickUnits = new Set<number>();
  for (let units = TICK_START; units <= maxUnits; units += TICK_STEP) {
    tickUnits.add(units);
  }
  labelUnits.forEach((units) => tickUnits.add(units));

  const fragment = document.createDocumentFragment();
  [...tickUnits]
    .sort((a, b) => a - b)
    .forEach((units) => {
      fragment.appendChild(createTick(units, labelUnits.includes(units)));
    });
  labelUnits.forEach((units) => {
    fragment.appendChild(createLabel(units));
  });

  strip.replaceChildren(fragment);
  applyTransform();
};

const scheduleBuild = () => {
  if (rebuildRequest) return;
  rebuildRequest = window.requestAnimationFrame(build);
};

if (strip) {
  build();

  window.addEventListener('scroll', scheduleTransform, { passive: true });
  window.addEventListener('resize', scheduleBuild, { passive: true });

  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(scheduleBuild);
    observer.observe(document.body);
  }
}
