<script lang="ts">
	import productsAmazon from '$lib/data/products/amazon.json';
	import ProductListing from '$lib/components/ProductListing.svelte';
</script>

<h1 class="m-10 text-5xl font-bold">Products</h1>
<h2 class="ml-10 text-2xl font-bold">Amazon Invitations</h2>
<div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 m-10">
	{#each productsAmazon as productAmazon}
		<ProductListing product={productAmazon} />
	{/each}
</div>
