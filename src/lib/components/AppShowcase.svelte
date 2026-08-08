<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	/*
	 * Full-width app screenshot showcase — replaces the old HowItWorks section.
	 * Displays the 8 store screenshots in a grid (desktop) or horizontal
	 * snap-scroll carousel (mobile). Each image already contains its own headline
	 * baked in, so no separate captions are needed.
	 */
	const screenshots = [
		{ src: '/screenshots/store/screenshot-1.png', alt: 'Get instant stock alerts' },
		{ src: '/screenshots/store/screenshot-2.png', alt: 'Faster checkout with direct buy links' },
		{ src: '/screenshots/store/screenshot-3.png', alt: 'Set what you want to hunt for' },
		{ src: '/screenshots/store/screenshot-4.png', alt: 'You are in control of the notifications' },
		{ src: '/screenshots/store/screenshot-5.png', alt: 'Set distinct sounds for your chase' },
		{ src: '/screenshots/store/screenshot-6.png', alt: 'Control what you consider hot' },
		{ src: '/screenshots/store/screenshot-7.png', alt: 'You know when you have gotten a deal' },
		{ src: '/screenshots/store/screenshot-8.png', alt: 'We track price changes' }
	];
</script>

<section class="showcase" id="how-it-works" aria-label="App screenshots">
	<div class="showcase__inner">
		<h2 class="showcase__heading reveal" use:reveal>See PokeBell in action</h2>

		<!-- Desktop: 4-column grid -->
		<div class="showcase__grid">
			{#each screenshots as shot, i}
				<div
					class="reveal"
					use:reveal={{ delay: (i % 4) * 100 }}
				>
					<div class="showcase__item">
						<img
							src={shot.src}
							alt={shot.alt}
							class="showcase__img"
						/>
					</div>
				</div>
			{/each}
		</div>

		<!-- Mobile: horizontal scroll carousel -->
		<div class="showcase__carousel">
			{#each screenshots as shot}
				<div class="showcase__slide">
					<img
						src={shot.src}
						alt={shot.alt}
						class="showcase__img"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.showcase {
		background: var(--color-brand-charcoal);
		padding: 4rem 1.5rem;
		overflow: hidden;
	}

	.showcase__inner {
		max-width: 1200px;
		margin: 0 auto;
	}

	.showcase__heading {
		font-family: var(--font-display);
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		font-weight: 800;
		color: var(--color-brand-cream);
		text-align: center;
		margin-bottom: 3rem;
	}

	/* Desktop grid: 4 columns */
	.showcase__grid {
		display: none;
	}

	/* Mobile carousel: horizontal snap scroll */
	.showcase__carousel {
		display: flex;
		gap: 1rem;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		-webkit-overflow-scrolling: touch;
		padding-bottom: 1rem;
		scrollbar-width: none;
	}

	.showcase__carousel::-webkit-scrollbar {
		display: none;
	}

	.showcase__slide {
		flex: 0 0 75%;
		scroll-snap-align: center;
	}

	.showcase__item {
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
		transition: transform 0.15s ease;
	}

	.showcase__item:hover {
		transform: scale(1.02);
	}

	.showcase__img {
		width: 100%;
		height: auto;
		display: block;
		border-radius: 12px;
	}

	.showcase__slide .showcase__img {
		border-radius: 12px;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
	}

	/* Tablet: 2 columns grid */
	@media (min-width: 640px) {
		.showcase__carousel {
			display: none;
		}

		.showcase__grid {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 1.5rem;
		}
	}

	/* Desktop: 4 columns grid */
	@media (min-width: 1024px) {
		.showcase {
			padding: 5rem 2rem;
		}

		.showcase__grid {
			grid-template-columns: repeat(4, 1fr);
			gap: 1.5rem;
		}

		.showcase__heading {
			margin-bottom: 3.5rem;
		}
	}
</style>
