<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Features from '$lib/components/Features.svelte';
	import AppShowcase from '$lib/components/AppShowcase.svelte';
	import Coverage from '$lib/components/Coverage.svelte';
	import Waitlist from '$lib/components/Waitlist.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { SUPPORTED_SHOP_COUNT_DISPLAY, SITE_URL, APP_STORE_URL, absUrl } from '$lib/config';

	const title = `PokeBell — Instant TCG stock alerts for ${SUPPORTED_SHOP_COUNT_DISPLAY}+ UK shops`;
	const description = `PokeBell watches ${SUPPORTED_SHOP_COUNT_DISPLAY}+ UK shops and sends an instant alert to your phone the moment the sealed Pokémon TCG products you want come back in stock.`;
	const jsonLd: Record<string, unknown>[] = [
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'PokeBell',
			url: SITE_URL,
			logo: absUrl('/favicon.svg')
		},
		{
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			name: 'PokeBell',
			url: SITE_URL
		},
		{
			'@context': 'https://schema.org',
			'@type': 'SoftwareApplication',
			name: 'PokeBell',
			operatingSystem: 'iOS',
			applicationCategory: 'UtilitiesApplication',
			url: APP_STORE_URL,
			installUrl: APP_STORE_URL
		}
	];
</script>

<Seo {title} {description} canonicalPath="/" {jsonLd} />

<Nav />

<main>
	<Hero />
	<Features />
	<AppShowcase />
	<Coverage />
	<Waitlist />
</main>

<Footer />
