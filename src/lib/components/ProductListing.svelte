<script lang="ts">
	import type { Product } from '$lib/types';

	const { product }: { product: Product } = $props();
</script>

<div class="grid h-128 p-8 grid place-items-start border-2 rounded-lg border-gray-300 hover:border-gray-700">
	<img class="h-40 place-self-center" src={product.imageUrl} alt={product.name} />
	<a class="font-bold mt-4" href={product.url}>{product.name}</a>
	<span class="mt-2">{product.price}</span>
</div>
