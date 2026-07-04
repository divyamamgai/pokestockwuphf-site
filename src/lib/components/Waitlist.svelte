<script lang="ts">
	import subscribeForm from '$lib/assets/subscribe-form.html?raw';
</script>

<section id="waitlist" class="scroll-mt-20 pb-24 pt-4">
	<div class="mx-auto max-w-6xl px-5">
		<div class="overflow-hidden rounded-3xl bg-brand-red">
			<div class="grid items-center gap-8 p-10 sm:p-14 lg:grid-cols-2">
				<div class="text-center lg:text-left">
					<h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
						Be first in line
					</h2>
					<p class="mt-4 max-w-md text-lg text-white/85">
						PokeBell is launching soon. Join the waitlist and we will let you know the moment
						the app is ready — plus you will be among the first to get access.
					</p>
					<p class="mt-4 text-sm text-white/70">
						No spam, ever. Just one email when we go live.
					</p>
				</div>

				<div class="waitlist-form">
					{@html subscribeForm}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* Let the embedded Brevo form breathe and sit centered within the CTA card. */
	.waitlist-form :global(.sib-form) {
		padding: 0 !important;
	}
	.waitlist-form :global(#sib-container) {
		max-width: 440px !important;
		margin: 0 auto;
	}
</style>
