<script lang="ts">
	import { layoutState } from '$lib/state.svelte';
	import { formatDate } from '$lib/data/blog/posts';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Carousel from '$lib/components/Carousel.svelte';

	let { data } = $props();
	const post = $derived(data.post);

	$effect(() => {
		layoutState.title = `PokeBell — ${post.title}`;
	});
</script>

<Nav />

<main class="mx-auto max-w-2xl px-5 py-16 sm:py-20">
	<a
		href="/blog"
		class="text-sm font-semibold text-brand-red transition-colors hover:text-brand-red-dark"
	>
		← Back to blog
	</a>

	<article class="mt-6">
		<header>
			<div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-brand-charcoal-soft">
				<time datetime={post.date}>{formatDate(post.date)}</time>
				{#if post.author}
					<span aria-hidden="true">·</span>
					<span>{post.author}</span>
				{/if}
				{#if post.tags?.length}
					<span aria-hidden="true">·</span>
					<span class="font-medium text-brand-red">{post.tags.join(', ')}</span>
				{/if}
			</div>
			<h1
				class="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-brand-charcoal sm:text-4xl"
			>
				{post.title}
			</h1>
		</header>

		{#if post.coverImage}
			<img
				src={post.coverImage}
				alt={post.coverAlt ?? ''}
				class="mt-8 w-full rounded-2xl border border-brand-cream-dark"
			/>
		{/if}

		<!-- Trusted, author-written HTML -->
		<div class="post-body mt-8">
			{@html post.content}
		</div>

		{#if post.gallery?.length}
			<section class="mt-12">
				<h2 class="text-2xl font-bold text-brand-charcoal">Product gallery</h2>
				<div class="mt-6">
					<Carousel images={post.gallery} />
				</div>
			</section>
		{/if}
	</article>
</main>

<Footer />

<style>
	/* Article typography for the {@html} body (no typography plugin needed). */
	.post-body :global(h2) {
		margin-top: 2rem;
		margin-bottom: 0.75rem;
		font-family: var(--font-display);
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--color-brand-charcoal);
	}
	.post-body :global(h3) {
		margin-top: 1.5rem;
		margin-bottom: 0.5rem;
		font-family: var(--font-display);
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--color-brand-charcoal);
	}
	.post-body :global(p) {
		margin-bottom: 1rem;
		font-size: 1.0625rem;
		line-height: 1.7;
		color: var(--color-brand-charcoal-soft);
	}
	.post-body :global(ul),
	.post-body :global(ol) {
		margin: 0 0 1rem 1.25rem;
		color: var(--color-brand-charcoal-soft);
		line-height: 1.7;
	}
	.post-body :global(ul) {
		list-style: disc;
	}
	.post-body :global(ol) {
		list-style: decimal;
	}
	.post-body :global(li) {
		margin-bottom: 0.35rem;
	}
	.post-body :global(a) {
		color: var(--color-brand-red);
		text-decoration: underline;
	}
	.post-body :global(strong) {
		color: var(--color-brand-charcoal);
		font-weight: 700;
	}
	.post-body :global(blockquote) {
		margin: 1.25rem 0;
		border-left: 3px solid var(--color-brand-sand);
		padding-left: 1rem;
		font-style: italic;
		color: var(--color-brand-charcoal-soft);
	}
	.post-body :global(figure) {
		margin: 1.75rem 0;
	}
	.post-body :global(img) {
		width: 100%;
		border-radius: 0.75rem;
		border: 1px solid var(--color-brand-cream-dark);
	}
	.post-body :global(figcaption) {
		margin-top: 0.5rem;
		text-align: center;
		font-size: 0.85rem;
		color: var(--color-brand-charcoal-soft);
	}

	/* Compact inline product row: small image beside the title + text. */
	.post-body :global(.product-row) {
		display: flex;
		gap: 1.1rem;
		align-items: flex-start;
		margin: 1.25rem 0;
		padding-bottom: 1.25rem;
		border-bottom: 1px solid var(--color-brand-cream-dark);
	}
	.post-body :global(.product-row:last-of-type) {
		border-bottom: 0;
	}
	.post-body :global(.product-thumb) {
		width: 140px;
		height: 140px;
		flex-shrink: 0;
		border-radius: 0.6rem;
		border: 1px solid var(--color-brand-cream-dark);
		background: #ffffff;
		object-fit: contain;
		padding: 0.4rem;
	}
	/* Keep the image link from shrinking in the flex row. */
	.post-body :global(.product-row > a) {
		flex-shrink: 0;
		line-height: 0;
	}
	/* Tighten headings/paragraphs inside a row (override the defaults above). */
	.post-body :global(.product-row h3) {
		margin-top: 0;
		margin-bottom: 0.35rem;
		font-size: 1.1rem;
	}
	.post-body :global(.product-row p) {
		margin-bottom: 0;
		font-size: 1rem;
		line-height: 1.6;
	}
	.post-body :global(.product-cta) {
		margin-top: 0.5rem;
		font-size: 0.9rem;
		font-weight: 600;
	}
	@media (min-width: 640px) {
		.post-body :global(.product-thumb) {
			width: 180px;
			height: 180px;
		}
	}
</style>
