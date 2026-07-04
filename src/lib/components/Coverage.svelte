<script lang="ts">
	import { SUPPORTED_SHOP_COUNT_DISPLAY } from '$lib/config';

	const stats = [
		{ value: `${SUPPORTED_SHOP_COUNT_DISPLAY}+`, label: 'UK TCG shops monitored' },
		{ value: '24/7', label: 'Always-on stock tracking' },
		{ value: 'Seconds', label: 'From restock to alert' },
		{ value: '1 app', label: 'Every store in one place' }
	];
</script>

<section id="coverage" class="scroll-mt-20 py-20 sm:py-24">
	<div class="mx-auto max-w-6xl px-5">
		<div
			class="rounded-3xl border border-brand-cream-dark bg-gradient-to-br from-white to-brand-cream-dark/50 p-10 sm:p-14"
		>
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="text-3xl font-extrabold tracking-tight text-brand-charcoal sm:text-4xl">
					Coverage that keeps up with the hobby
				</h2>
				<p class="mt-4 text-lg text-brand-charcoal-soft">
					From the big-name retailers to the independent shops, PokeBell keeps an eye on it
					all — so a restock anywhere becomes an alert on your phone.
				</p>
			</div>

			<dl class="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4">
				{#each stats as stat (stat.label)}
					<div class="text-center">
						<dt class="font-display text-4xl font-extrabold text-brand-red sm:text-5xl">
							{stat.value}
						</dt>
						<dd class="mt-2 text-sm font-medium text-brand-charcoal-soft">{stat.label}</dd>
					</div>
				{/each}
			</dl>

			<p
				class="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-center text-sm text-brand-charcoal-soft"
			>
				<span
					class="inline-flex items-center gap-1.5 rounded-full border border-brand-sand/60 bg-brand-sand-soft/60 px-3 py-1 font-semibold text-brand-charcoal"
				>
					<span class="h-1.5 w-1.5 rounded-full bg-brand-sand"></span>
					Coming soon
				</span>
				Pokémon sealed products today — One Piece and more TCGs are on the way.
			</p>
		</div>
	</div>
</section>
