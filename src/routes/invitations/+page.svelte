<script lang="ts">
	import { layoutState } from '$lib/state.svelte';
	import type { ProductGroup } from '$lib/types';
	import invitationGroups from '$lib/data/products/invitations.json';
	import ProductListing from '$lib/components/ProductListing.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Single source of truth: add a shop or products by editing invitations.json.
	const groups = invitationGroups as ProductGroup[];

	layoutState.title = 'PokeBell — Invitation Products';
</script>

<Nav />

<main class="mx-auto max-w-6xl px-5 py-16 sm:py-20">
	<header class="mx-auto max-w-2xl text-center">
		<h1 class="text-4xl font-extrabold tracking-tight text-brand-charcoal sm:text-5xl">
			Invitation Products
		</h1>
		<p class="mt-4 text-lg text-brand-charcoal-soft">
			Sealed Pokémon products currently available to buy via invite. More shops coming soon.
		</p>
	</header>

	<div class="mt-14 space-y-16">
		{#each groups as group (group.shop)}
			<section>
				<h2 class="text-2xl font-extrabold tracking-tight text-brand-charcoal">{group.shop}</h2>
				<div class="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
					{#each group.products as product}
						<ProductListing {product} />
					{/each}
				</div>
			</section>
		{/each}
	</div>
</main>

<Footer />
