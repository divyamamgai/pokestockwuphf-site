<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { sortedPosts, formatDate } from '$lib/data/blog/posts';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Seo
	title="PokeBell — Blog"
	description="News, restock watch and buying guides for the latest Pokémon TCG sealed releases, from the PokeBell team."
	canonicalPath="/blog"
/>

<Nav />

<main class="mx-auto max-w-3xl px-5 py-16 sm:py-20">
	<header class="text-center">
		<h1 class="text-4xl font-extrabold tracking-tight text-brand-charcoal sm:text-5xl">Blog</h1>
		<p class="mt-4 text-lg text-brand-charcoal-soft">
			News, restock watch and buying guides for the latest Pokémon TCG releases.
		</p>
	</header>

	{#if sortedPosts.length === 0}
		<p class="mt-16 text-center text-brand-charcoal-soft">No posts yet — check back soon.</p>
	{:else}
		<div class="mt-14 space-y-6">
			{#each sortedPosts as post (post.slug)}
				<a
					href="/blog/{post.slug}"
					class="group block rounded-2xl border border-brand-cream-dark bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-sand hover:shadow-md sm:p-8"
				>
					{#if post.coverImage}
						<img
							src={post.coverImage}
							alt={post.coverAlt ?? ''}
							loading="lazy"
							class="mb-5 aspect-[16/9] w-full rounded-xl border border-brand-cream-dark object-cover"
						/>
					{/if}
					<div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-brand-charcoal-soft">
						<time datetime={post.date}>{formatDate(post.date)}</time>
						{#if post.tags?.length}
							<span aria-hidden="true">·</span>
							<span class="font-medium text-brand-red">{post.tags.join(', ')}</span>
						{/if}
					</div>
					<h2
						class="mt-2 text-2xl font-bold text-brand-charcoal transition-colors group-hover:text-brand-red"
					>
						{post.title}
					</h2>
					<p class="mt-2 text-brand-charcoal-soft">{post.excerpt}</p>
					<span class="mt-4 inline-block text-sm font-semibold text-brand-red">Read more →</span>
				</a>
			{/each}
		</div>
	{/if}
</main>

<Footer />
