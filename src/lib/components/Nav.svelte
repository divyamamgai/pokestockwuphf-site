<script lang="ts">
	import logo from '$lib/assets/favicon.svg';

	const links = [
		{ href: '/#features', label: 'Features' },
		{ href: '/#how-it-works', label: 'How it works' },
		{ href: '/#coverage', label: 'Coverage' }
	];
</script>

<header
	class="sticky top-0 z-50 border-b border-brand-cream-dark/70 bg-brand-cream/80 backdrop-blur"
>
	<nav class="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
		<a href="/" class="flex items-center gap-2.5">
			<img src={logo} alt="" class="h-9 w-9" />
			<span class="font-display text-lg font-extrabold tracking-tight text-brand-charcoal">
				PokeBell
			</span>
		</a>

		<div class="hidden items-center gap-8 md:flex">
			{#each links as link (link.href)}
				<a
					href={link.href}
					class="text-sm font-medium text-brand-charcoal-soft transition-colors hover:text-brand-red"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<a
			href="/#waitlist"
			class="rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-red-dark"
		>
			Android waitlist
		</a>
	</nav>
</header>
