<script lang="ts">
	import { layoutState } from '$lib/state.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Features from '$lib/components/Features.svelte';
	import AppShowcase from '$lib/components/AppShowcase.svelte';
	import Coverage from '$lib/components/Coverage.svelte';
	import Waitlist from '$lib/components/Waitlist.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { SUPPORTED_SHOP_COUNT_DISPLAY } from '$lib/config';

	layoutState.title = `PokeBell — Instant TCG stock alerts for ${SUPPORTED_SHOP_COUNT_DISPLAY}+ UK shops`;
</script>

<Nav />

<main>
	<Hero />
	<Features />
	<AppShowcase />
	<Coverage />
	<Waitlist />
</main>

<Footer />
