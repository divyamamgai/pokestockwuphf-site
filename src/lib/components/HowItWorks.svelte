<script lang="ts">
	/*
	 * "See PokeBell in action" — a merged walkthrough (Option B): each step is a
	 * row pairing the real screenshot that proves it with the step copy, sides
	 * alternating down the section, on the dark standout theme.
	 *
	 * Screenshots live in `static/screenshots/`. The phone uses a NESTED frame
	 * (padded bezel + inner clipped screen) rather than a bordered box, which
	 * avoids the corner-bleed artifact you get when an inset image is clipped by
	 * a rounded border. Each image fades in on load; a labelled placeholder shows
	 * until then.
	 */
	type Step = {
		number: string;
		title: string;
		description: string;
		src: string;
		label: string;
	};

	const steps: Step[] = [
		{
			number: '01',
			title: 'Build your watchlist',
			description:
				'Tell PokeBell the sets, brands and sealed products you are chasing — and mute the noise you are not. Allow-list or block by set, brand, category or price.',
			src: '/screenshots/rules.png',
			label: 'Notification rules'
		},
		{
			number: '02',
			title: 'Get instant alerts',
			description:
				'The moment anything on your list is back in stock, it lands at the top of your feed — with the price and how it compares to RRP, timestamped so you can see how fast it arrived.',
			src: '/screenshots/feed.png',
			label: 'Alert feed'
		},
		{
			number: '03',
			title: 'Buy in one tap',
			description:
				'Open the alert and check out straight from it — so you beat the rush before stock sells out.',
			src: '/screenshots/detail.png',
			label: 'Alert detail'
		}
	];

	// Tracks which screenshots have loaded so we can fade them in.
	let loaded = $state<Record<string, boolean>>({});
</script>

<section id="how-it-works" class="scroll-mt-20 bg-brand-charcoal py-20 sm:py-24">
	<div class="mx-auto max-w-6xl px-5">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-extrabold tracking-tight text-brand-cream sm:text-4xl">
				See PokeBell in action
			</h2>
			<p class="mt-4 text-lg text-brand-cream/70">
				From watchlist to checkout — here is the whole flow, in three steps.
			</p>
		</div>

		<div class="mt-16 flex flex-col gap-16 lg:gap-20">
			{#each steps as step, i (step.number)}
				<div
					class="flex flex-col items-center justify-center gap-8 lg:gap-12 {i % 2 === 1
						? 'lg:flex-row-reverse'
						: 'lg:flex-row'}"
				>
					<!-- Phone -->
					<figure class="w-full max-w-[13rem] shrink-0">
						<!-- Nested frame: padded bezel + inner clipped screen (no corner bleed) -->
						<div class="rounded-lg bg-black/60 p-1.5 shadow-2xl ring-1 ring-white/10">
							<div class="relative aspect-[54/109] overflow-hidden rounded-[0.35rem]">
								<!-- Placeholder ONLY while loading; removed on load so no light
								     fringe shows through the rounded corners -->
								{#if !loaded[step.src]}
									<div
										class="absolute inset-0 grid place-items-center bg-gradient-to-br from-brand-sand-soft/80 to-brand-cream p-6 text-center"
									>
										<span class="text-sm font-semibold text-brand-charcoal">{step.label}</span>
									</div>
								{/if}
								<img
									src={step.src}
									alt="PokeBell — {step.label}"
									loading="lazy"
									class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
									class:opacity-0={!loaded[step.src]}
									class:opacity-100={loaded[step.src]}
									onload={() => (loaded[step.src] = true)}
								/>
							</div>
						</div>
					</figure>

					<!-- Copy -->
					<div class="max-w-md text-center {i % 2 === 1 ? 'lg:text-right' : 'lg:text-left'}">
						<span class="font-display text-5xl font-extrabold text-brand-sand/70">{step.number}</span>
						<h3 class="mt-3 text-2xl font-bold text-brand-cream sm:text-3xl">{step.title}</h3>
						<p class="mt-3 text-lg text-brand-cream/70">
							{step.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
