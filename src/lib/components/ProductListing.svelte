<script lang="ts">
	import type { Product } from '$lib/types';

	const { product }: { product: Product } = $props();

	// Affiliate link params (pokestockwuphf-21 is the Amazon Associates tag).
	const href = $derived(
		`${product.url}?&linkCode=ll1&tag=pokestockwuphf-21&language=en_GB&ref_=as_li_ss_tl`
	);
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class="group flex flex-col rounded-2xl border border-brand-cream-dark bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-sand hover:shadow-md"
>
	<img
		class="mx-auto h-36 object-contain"
		src={product.imageUrl}
		alt={product.name}
		loading="lazy"
	/>
	<span
		class="mt-4 line-clamp-2 text-sm font-semibold text-brand-charcoal transition-colors group-hover:text-brand-red"
	>
		{product.name}
	</span>
	<span class="mt-2 text-sm font-medium text-brand-charcoal-soft">{product.price}</span>
</a>
