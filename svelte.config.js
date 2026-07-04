import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		prerender: {
			// App screenshots are dropped into static/screenshots/ later. Until they
			// exist the <img> references 404 during prerender — that's expected, so
			// don't fail the build for those paths (the UI shows placeholders).
			handleHttpError: ({ path, message }) => {
				if (path.startsWith('/screenshots/')) return;
				throw new Error(message);
			}
		}
	}
};

export default config;
