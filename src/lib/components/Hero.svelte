<script lang="ts">
	import BellLogo from './BellLogo.svelte';
	import StoreBadges from './StoreBadges.svelte';
	import HeroNotifications from './HeroNotifications.svelte';
	import { SUPPORTED_SHOP_COUNT_DISPLAY } from '$lib/config';
</script>

<section
	class="relative flex min-h-[calc(100svh-var(--nav-height))] items-center overflow-hidden"
>
	<!-- Soft warm glow behind the hero -->
	<div
		class="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-96 max-w-3xl rounded-full bg-brand-sand/30 blur-3xl"
		aria-hidden="true"
	></div>

	<!-- Faded live "restock" notifications drifting behind the content -->
	<HeroNotifications />

	<div class="relative mx-auto w-full max-w-6xl px-5 py-12 text-center">
		<span
			class="relative z-10 inline-flex items-center gap-2 rounded-full border border-brand-sand/60 bg-brand-sand-soft px-4 py-1.5 text-sm font-medium text-brand-charcoal"
		>
			<span class="h-2 w-2 animate-pulse rounded-full bg-brand-red"></span>
			Live stock tracking across {SUPPORTED_SHOP_COUNT_DISPLAY}+ UK TCG shops
		</span>

		<div class="bell-stage mx-auto mt-8 grid h-24 w-24 place-items-center sm:h-28 sm:w-28">
			<!-- Sonar-style "echo" rings that radiate out while the bell rings -->
			<span class="bell-echo" aria-hidden="true"></span>
			<span class="bell-echo bell-echo--2" aria-hidden="true"></span>
			<BellLogo class="relative h-24 w-24 sm:h-28 sm:w-28" />
		</div>

		<h1
			class="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-brand-charcoal sm:text-6xl"
		>
			Never miss a <span class="text-brand-red">restock</span> again.
		</h1>

		<p class="mx-auto mt-5 max-w-2xl text-lg text-brand-charcoal-soft sm:text-xl">
			PokeBell watches the entire UK Trading Card Game market for you and sends an instant
			alert straight to your phone the moment the sealed products you want come back in
			stock.
		</p>

		<div class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
			<a
				href="#waitlist"
				class="w-full rounded-full bg-brand-red px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-red/20 transition-colors hover:bg-brand-red-dark sm:w-auto"
			>
				Join the waitlist
			</a>
			<a
				href="#how-it-works"
				class="w-full rounded-full border border-brand-charcoal/15 bg-white px-8 py-3.5 text-base font-semibold text-brand-charcoal transition-colors hover:border-brand-charcoal/30 sm:w-auto"
			>
				See how it works
			</a>
		</div>

		<p class="mt-4 text-sm text-brand-charcoal-soft">
			Faster than any other alert · Delivered in seconds · No spam
		</p>

		<div class="mx-auto mt-5 h-px w-16 bg-brand-charcoal/15" aria-hidden="true"></div>

		<div class="mt-5 flex flex-col items-center gap-3">
			<p class="text-sm font-semibold text-brand-charcoal">Launching on iOS &amp; Android</p>
			<StoreBadges />
		</div>
	</div>
</section>

<style>
	/* The stage stacks the logo and its echo rings on top of each other. */
	.bell-stage {
		position: relative;
	}

	/*
	 * Echo rings: circular outlines that scale up and fade out, emitted in sync
	 * with the ring (~60% into the loop) to read as sound/notification pulses.
	 */
	.bell-echo {
		position: absolute;
		inset: 0;
		border-radius: 9999px;
		border: 2px solid var(--color-brand-red);
		opacity: 0;
		pointer-events: none;
		animation: bell-echo 3s ease-out infinite;
	}

	.bell-echo--2 {
		border-color: var(--color-brand-sand);
		animation-delay: 0.28s;
	}

	@keyframes bell-echo {
		0%,
		58% {
			transform: scale(0.7);
			opacity: 0;
		}
		62% {
			opacity: 0.65;
		}
		100% {
			transform: scale(2.2);
			opacity: 0;
		}
	}

	/* Respect users who prefer reduced motion: hide the pulsing echo rings. */
	@media (prefers-reduced-motion: reduce) {
		.bell-echo {
			display: none;
		}
	}
</style>
