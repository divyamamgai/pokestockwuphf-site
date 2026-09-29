<script lang="ts">
	// Per-page SEO head tags. Rendering the tags from a component's OWN
	// <svelte:head> (rather than mutating a shared store that the root layout
	// reads) is what makes them appear deterministically in the prerendered HTML:
	// during SSR a component's <svelte:head> is captured as that component renders,
	// with no cross-page state carryover and no parent/child ordering hazard.
	import { absUrl } from '$lib/config';

	interface Props {
		/** Browser-tab title + og/twitter title. */
		title: string;
		/** Meta description + og/twitter description. */
		description: string;
		/** Route path for the self-referential canonical + og:url, e.g. '/blog/foo'. */
		canonicalPath: string;
		/** Social preview image path or absolute URL. Defaults to the sitewide image. */
		ogImage?: string;
		/** JSON-LD objects, each emitted as its own <script type="application/ld+json">. */
		jsonLd?: Record<string, unknown>[];
	}

	let {
		title,
		description,
		canonicalPath,
		ogImage = '/og-image.png',
		jsonLd = []
	}: Props = $props();

	// Canonical / social tags must be absolute URLs for crawlers.
	const canonical = $derived(absUrl(canonicalPath));
	const ogImageUrl = $derived(absUrl(ogImage));
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<!-- Open Graph / social preview -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonical} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImageUrl} />

	<!-- Twitter card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImageUrl} />

	<!-- Structured data: one <script> per JSON-LD object (closing tag split so the
	     compiler does not end the block early). -->
	{#each jsonLd as schema}
		{@html '<script type="application/ld+json">' + JSON.stringify(schema) + '<\/script>'}
	{/each}
</svelte:head>
