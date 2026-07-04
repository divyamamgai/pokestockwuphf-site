/**
 * Site-wide configuration values.
 *
 * `SUPPORTED_SHOP_COUNT` is the number of UK shops PokeBell actively monitors.
 * It is intentionally a hand-maintained constant: the marketing site is a
 * separate static build, so update this number when coverage changes to keep
 * the landing page accurate.
 *
 * Last synced: 2026-07-04.
 */
export const SUPPORTED_SHOP_COUNT = 198;

/**
 * Rounds a value DOWN to the nearest multiple of `step`.
 *
 * We round down (not to nearest) so the public figure is always something we
 * genuinely meet or exceed — e.g. 198 → "190+", never an overstated "200+".
 */
export function roundDownTo(value: number, step = 10): number {
	return Math.floor(value / step) * step;
}

/** The public-facing shop count, rounded down to the nearest 10 (e.g. 190). */
export const SUPPORTED_SHOP_COUNT_DISPLAY = roundDownTo(SUPPORTED_SHOP_COUNT);
