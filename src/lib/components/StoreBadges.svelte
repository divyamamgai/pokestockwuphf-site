<script lang="ts">
	// App-store badges. A badge with an `href` renders as a live link; a badge
	// without one stays in the DISABLED "coming soon" state. When the Android app
	// goes live, add its `href` (and update `pre`) to make it a real link too.
	let { class: className = '' }: { class?: string } = $props();

	const badges = [
		{
			name: 'App Store',
			// Live: real link + active label.
			pre: 'Download on the',
			href: 'https://apps.apple.com/gb/app/pokebell/id6792279766',
			viewBox: '0 0 384 512',
			// Apple logo
			icon: 'M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z'
		},
		{
			name: 'Google Play',
			// Not live yet: no href -> renders as a disabled "coming soon" badge.
			pre: 'Coming soon on',
			href: undefined as string | undefined,
			viewBox: '0 0 512 512',
			// Google Play logo
			icon: 'M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3 60.1 60.1L104.6 499z'
		}
	];
</script>

<div class={`flex flex-col items-center gap-3 sm:flex-row ${className}`}>
	{#each badges as badge (badge.name)}
		{#if badge.href}
			<a
				href={badge.href}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex w-56 select-none items-center gap-3 rounded-xl border border-brand-charcoal/20 bg-brand-charcoal px-4 py-2.5 text-white transition-transform hover:scale-[1.03]"
				title="Download {badge.name}"
			>
				<svg
					class="h-7 w-7 flex-shrink-0"
					viewBox={badge.viewBox}
					fill="currentColor"
					aria-hidden="true"
				>
					<path d={badge.icon} />
				</svg>
				<span class="flex flex-col text-left leading-tight">
					<span class="text-[0.65rem] uppercase tracking-wide text-white/75">{badge.pre}</span>
					<span class="text-base font-semibold">{badge.name}</span>
				</span>
			</a>
		{:else}
			<span
				class="inline-flex w-56 cursor-not-allowed select-none items-center gap-3 rounded-xl border border-brand-charcoal/20 bg-brand-charcoal px-4 py-2.5 text-white opacity-55 grayscale"
				aria-disabled="true"
				title="{badge.name} — coming soon"
			>
				<svg
					class="h-7 w-7 flex-shrink-0"
					viewBox={badge.viewBox}
					fill="currentColor"
					aria-hidden="true"
				>
					<path d={badge.icon} />
				</svg>
				<span class="flex flex-col text-left leading-tight">
					<span class="text-[0.65rem] uppercase tracking-wide text-white/75">{badge.pre}</span>
					<span class="text-base font-semibold">{badge.name}</span>
				</span>
			</span>
		{/if}
	{/each}
</div>
