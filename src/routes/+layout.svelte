<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/assets/app.css';
	import { layoutState } from '$lib/state.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>{layoutState.title}</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
