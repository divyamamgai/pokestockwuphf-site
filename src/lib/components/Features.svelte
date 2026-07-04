<script lang="ts">
	import { SUPPORTED_SHOP_COUNT_DISPLAY } from '$lib/config';

	type Feature = {
		title: string;
		description: string;
		icon: string; // inline SVG path data (Heroicons outline)
	};

	const features: Feature[] = [
		{
			title: 'Instant stock alerts',
			description:
				'The moment a restock or price change is spotted, a push notification lands on your phone. Every alert is timestamped, so you can see just how fast it reached you.',
			icon: 'M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0'
		},
		{
			title: 'Buy straight from the alert',
			description:
				'Tap Buy right on the notification to jump onto the product page — and at supported stores, a one-tap checkout link gets you even closer to done before stock is gone.',
			icon: 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
		},
		{
			title: 'Know it is a real deal',
			description:
				'Every alert is matched to our product catalog and shows the price as a percentage above or below RRP — so you can tell a genuine deal from a scalper markup at a glance.',
			icon: 'M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z'
		},
		{
			title: 'Only what you are chasing',
			description:
				'Filter and mute by set, brand, category or price, and build your own rules — so you only hear about the products you actually care about, and nothing else.',
			icon: 'M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75'
		},
		{
			title: 'Never miss a hot drop',
			description:
				'Flag the big ones as hot to give them their own alert sound from 20+ built-in tones — so a major drop is unmistakable, even from inside your pocket.',
			icon: 'M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.048 8.287 8.287 0 0 0 9 9.6a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48z M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18z'
		},
		{
			title: `${SUPPORTED_SHOP_COUNT_DISPLAY}+ UK shops covered`,
			description:
				'One app watches the whole UK market — major retailers and independent card shops alike — so a restock anywhere becomes an alert on your phone.',
			icon: 'M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z'
		}
	];
</script>

<section id="features" class="scroll-mt-20 py-20 sm:py-24">
	<div class="mx-auto max-w-6xl px-5">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-extrabold tracking-tight text-brand-charcoal sm:text-4xl">
				Everything you need to catch the drop
			</h2>
			<p class="mt-4 text-lg text-brand-charcoal-soft">
				Stock moves fast. PokeBell moves faster — so the cards you want end up in your hands.
			</p>
		</div>

		<div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each features as feature (feature.title)}
				<div
					class="group rounded-2xl border border-brand-cream-dark bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-sand hover:shadow-md"
				>
					<div
						class="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-sand-soft/70 text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white"
					>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.7"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d={feature.icon} />
						</svg>
					</div>
					<h3 class="mt-5 text-lg font-bold text-brand-charcoal">{feature.title}</h3>
					<p class="mt-2 text-brand-charcoal-soft">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
