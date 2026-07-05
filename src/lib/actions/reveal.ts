import type { Action } from 'svelte/action';

/**
 * `use:reveal` — reveals an element (fade + rise) the first time it scrolls into
 * view, via IntersectionObserver. The hidden/animated state lives in global CSS
 * (`.reveal` / `.reveal.is-visible` in app.css), gated on `prefers-reduced-motion:
 * no-preference`, so reduced-motion and no-JS users always see content.
 *
 * Usage: <div class="reveal" use:reveal={{ delay: 80 }}> … </div>
 *   - delay (ms): stagger multiple items.
 */
export type RevealParams = { delay?: number } | undefined;

export const reveal: Action<HTMLElement, RevealParams> = (node, params) => {
	const applyDelay = (p: RevealParams) => {
		node.style.transitionDelay = p?.delay ? `${p.delay}ms` : '';
	};
	applyDelay(params);

	// Respect reduced motion: show immediately, no observer.
	if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
		node.classList.add('is-visible');
		return { update: applyDelay };
	}

	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					io.unobserve(entry.target); // one-shot
				}
			}
		},
		{ threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
	);
	io.observe(node);

	return {
		update: applyDelay,
		destroy() {
			io.disconnect();
		}
	};
};
