/**
 * Site-wide configuration values.
 *
 * `SUPPORTED_SHOP_COUNT` is the number of UK shops PokeBell actively monitors.
 * It is intentionally a hand-maintained constant: the marketing site is a
 * separate static build, so update this number when coverage changes to keep
 * the landing page accurate.
 *
 * Last synced: 2026-09-24.
 */
export const SUPPORTED_SHOP_COUNT = 209;

/**
 * Rounds a value DOWN to the nearest multiple of `step`.
 *
 * We round down (not to nearest) so the public figure is always something we
 * genuinely meet or exceed — e.g. 209 → "200+", never an overstated figure.
 */
export function roundDownTo(value: number, step = 10): number {
	return Math.floor(value / step) * step;
}

/** The public-facing shop count, rounded down to the nearest 10 (e.g. 190). */
export const SUPPORTED_SHOP_COUNT_DISPLAY = roundDownTo(SUPPORTED_SHOP_COUNT);

/**
 * The canonical site origin (no trailing slash). Used to build absolute URLs
 * for SEO tags (canonical, og:url, og:image) and the sitemap.
 */
export const SITE_URL = 'https://pokebell.co.uk';

/** The public App Store listing for the iOS app (single source of truth). */
export const APP_STORE_URL = 'https://apps.apple.com/gb/app/pokebell/id6792279766';

/**
 * Resolves a site-relative path (e.g. `/blog/foo`) to an absolute URL against
 * `SITE_URL`. Absolute inputs (e.g. an external image URL) are returned as-is.
 */
export function absUrl(path: string): string {
	return new URL(path, SITE_URL).href;
}
