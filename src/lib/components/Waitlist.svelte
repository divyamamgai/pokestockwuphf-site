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
	/*
	 * PURELY COSMETIC overrides for the embedded Brevo form. We do NOT touch
	 * subscribe-form.html, so all functional attributes (form action, name="EMAIL",
	 * the honeypot, reCAPTCHA, and Brevo's #error-message/#success-message logic
	 * and scripts) are unchanged. These rules only re-skin it to the brand, using
	 * :global (the form is injected via {@html}) and !important to beat Brevo's
	 * inline styles.
	 */

	/* Layout */
	.waitlist-form :global(.sib-form) {
		padding: 0 !important;
	}

	/* Card container */
	.waitlist-form :global(#sib-container) {
		max-width: 440px !important;
		margin: 0 auto;
		background-color: #ffffff !important;
		border: 1px solid var(--color-brand-cream-dark) !important;
		border-radius: 1rem !important;
		padding: 1.5rem !important;
	}

	/* Label ("Join the waitlist.") */
	.waitlist-form :global(#sib-container .entry__label) {
		font-family: var(--font-display) !important;
		font-weight: 700 !important;
		font-size: 1rem !important;
		color: var(--color-brand-charcoal) !important;
	}

	/* The visible input box is Brevo's `.entry__field` WRAPPER (it carries the
	   border/background); the <input> itself is transparent. So style the wrapper
	   as the field, and keep the input transparent to avoid a nested double-box. */
	.waitlist-form :global(#sib-container .entry__field) {
		width: 100% !important;
		margin: 0 !important;
		background-color: var(--color-brand-cream) !important;
		border: 1px solid var(--color-brand-cream-dark) !important;
		border-radius: 0.6rem !important;
		box-shadow: none !important;
		transition:
			border-color 0.15s ease,
			box-shadow 0.15s ease !important;
	}
	/* Focus ring on the wrapper — overrides Brevo's blue `box-shadow:0 0 0 2px #c9e1f4`. */
	.waitlist-form :global(#sib-container .entry__field:focus-within) {
		outline: none !important;
		border-color: var(--color-brand-red) !important;
		box-shadow: 0 0 0 3px rgba(202, 60, 37, 0.15) !important;
	}

	/* The actual <input>: transparent, brand text, no border/ring of its own. */
	.waitlist-form :global(#sib-container .input),
	.waitlist-form :global(#sib-container input#EMAIL) {
		width: 100% !important;
		height: auto !important;
		background: transparent !important;
		border: 0 !important;
		outline: none !important;
		box-shadow: none !important;
		font-family: var(--font-body) !important;
		font-size: 1rem !important;
		color: var(--color-brand-charcoal) !important;
		padding: 0.7rem 0.9rem !important;
	}
	.waitlist-form :global(#sib-container .input:focus),
	.waitlist-form :global(#sib-container .input:focus-visible),
	.waitlist-form :global(#sib-container input#EMAIL:focus),
	.waitlist-form :global(#sib-container input#EMAIL:focus-visible) {
		outline: none !important;
		box-shadow: none !important;
	}
	.waitlist-form :global(#sib-container input#EMAIL::placeholder) {
		color: var(--color-brand-charcoal-soft) !important;
		opacity: 0.7 !important;
	}

	/* Submit button */
	.waitlist-form :global(#sib-container .sib-form-block__button) {
		display: inline-flex !important;
		align-items: center !important;
		justify-content: center !important;
		gap: 0.5rem !important;
		font-family: var(--font-display) !important;
		font-weight: 700 !important;
		color: #ffffff !important;
		background-color: var(--color-brand-charcoal) !important;
		border-radius: 9999px !important;
		padding: 0.7rem 1.6rem !important;
		transition: background-color 0.2s ease !important;
	}
	.waitlist-form :global(#sib-container .sib-form-block__button:hover) {
		background-color: var(--color-brand-charcoal-soft) !important;
	}
	/* Submit loading spinner: keep it inline, sized to the label, and spaced by the
	   button's gap. Brevo toggles its visibility via .sib-hide-loader-icon (display),
	   so when idle it's out of flow and the gap adds no extra space — we don't touch
	   that class. */
	.waitlist-form :global(#sib-container .sib-form-block__button .icon),
	.waitlist-form :global(#sib-container .progress-indicator__icon) {
		width: 1.1em !important;
		height: 1.1em !important;
		vertical-align: middle !important;
		fill: currentColor !important;
	}

	/* Links (e.g. any privacy/terms links Brevo adds) */
	.waitlist-form :global(#sib-container a) {
		color: var(--color-brand-red) !important;
	}

	/* Success / error panels: keep Brevo's semantic colours + show/hide logic,
	   just round the corners to match the card. */
	.waitlist-form :global(.sib-form-message-panel) {
		border-radius: 0.6rem !important;
		font-family: var(--font-body) !important;
	}
</style>
