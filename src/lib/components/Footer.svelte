<script lang="ts">
	import logo from '$lib/assets/favicon.svg';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-brand-cream-dark bg-brand-cream">
	<div
		class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row"
	>
		<a href="/" class="flex items-center gap-2.5">
			<img src={logo} alt="" class="h-8 w-8" />
			<span class="font-display text-base font-extrabold tracking-tight text-brand-charcoal">
				PokeBell
			</span>
		</a>

		<nav class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
			<a href="/#features" class="text-brand-charcoal-soft transition-colors hover:text-brand-red">
				Features
			</a>
			<a
				href="/#how-it-works"
				class="text-brand-charcoal-soft transition-colors hover:text-brand-red"
			>
				How it works
			</a>
			<a href="/invitations" class="text-brand-charcoal-soft transition-colors hover:text-brand-red">
				Invitation Products
			</a>
			<a href="/#waitlist" class="text-brand-charcoal-soft transition-colors hover:text-brand-red">
				Join the waitlist
			</a>
		</nav>

		<p class="text-sm text-brand-charcoal-soft">© {year} PokeBell</p>
	</div>
</footer>
