<script lang="ts">
	import type { GalleryImage } from '$lib/types';

	let { images }: { images: readonly GalleryImage[] } = $props();

	let track = $state<HTMLDivElement | null>(null);
	let index = $state(0);

	const prefersReduced = () =>
		typeof window !== 'undefined' &&
		window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

	/** Scroll a specific slide into view. `instant` is used when wrapping so we
	 *  don't animate a long scroll across the whole strip. */
	function goTo(i: number, instant = false) {
		index = i;
		const child = track?.children[i] as HTMLElement | undefined;
		if (!track || !child) return;
		track.scrollTo({ left: child.offsetLeft, behavior: instant || prefersReduced() ? 'auto' : 'smooth' });
	}

	/** Step one slide, wrapping around at either end. */
	function step(dir: 1 | -1) {
		const n = images.length;
		const wrapping = (dir === 1 && index === n - 1) || (dir === -1 && index === 0);
		goTo((index + dir + n) % n, wrapping);
	}

	/** Keep `index` in sync when the user swipes/scrolls manually. */
	function onScroll() {
		if (!track) return;
		const sl = track.scrollLeft;
		let nearest = 0;
		let best = Infinity;
		for (let i = 0; i < track.children.length; i++) {
			const d = Math.abs((track.children[i] as HTMLElement).offsetLeft - sl);
			if (d < best) {
				best = d;
				nearest = i;
			}
		}
		if (nearest !== index) index = nearest;
	}

	const chevron = {
		left: 'M15.75 19.5 8.25 12l7.5-7.5',
		right: 'm8.25 4.5 7.5 7.5-7.5 7.5'
	};

	const btnBase =
		'absolute top-[calc(50%-0.9rem)] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full ' +
		'bg-brand-red text-white shadow-lg shadow-brand-red/30 ring-1 ring-white/20 transition ' +
		'duration-200 ease-out hover:bg-brand-red-dark hover:scale-110 active:scale-90 ' +
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/50';
</script>

<div class="relative">
	<div
		bind:this={track}
		onscroll={onScroll}
		class="gallery-track flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-1"
	>
		{#each images as img (img.src)}
			<figure class="w-full shrink-0 snap-center">
				<img
					src={img.src}
					alt={img.alt}
					loading="lazy"
					class="aspect-[16/9] w-full rounded-xl border border-brand-cream-dark bg-brand-cream object-contain"
				/>
				{#if img.caption}
					<figcaption class="mt-2 text-center text-sm text-brand-charcoal-soft">
						{img.caption}
					</figcaption>
				{/if}
			</figure>
		{/each}
	</div>

	{#if images.length > 1}
		<!-- Position counter -->
		<span
			class="absolute right-3 top-3 rounded-full bg-brand-charcoal/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur"
		>
			{index + 1} / {images.length}
		</span>

		<button type="button" aria-label="Previous image" onclick={() => step(-1)} class="{btnBase} left-2">
			<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" d={chevron.left} />
			</svg>
		</button>
		<button type="button" aria-label="Next image" onclick={() => step(1)} class="{btnBase} right-2">
			<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" d={chevron.right} />
			</svg>
		</button>
	{/if}
</div>

<style>
	/* Hide the scrollbar (navigation is via swipe + the arrow buttons). */
	.gallery-track {
		scrollbar-width: none;
	}
	.gallery-track::-webkit-scrollbar {
		display: none;
	}
</style>
