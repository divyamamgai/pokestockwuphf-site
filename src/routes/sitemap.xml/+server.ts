import { SITE_URL } from '$lib/config';
import { posts } from '$lib/data/blog/posts';
import type { RequestHandler } from './$types';

// Prerender the sitemap to a static docs/sitemap.xml at build time.
export const prerender = true;

// Static, always-present routes (order roughly by importance).
const STATIC_PATHS = ['/', '/invitations', '/blog', '/support', '/terms', '/privacy'];

export const GET: RequestHandler = () => {
	const urls = [
		...STATIC_PATHS.map((path) => `\t<url>\n\t\t<loc>${SITE_URL}${path}</loc>\n\t</url>`),
		// One entry per blog post, using its publish date as <lastmod>.
		...posts.map(
			(post) =>
				`\t<url>\n\t\t<loc>${SITE_URL}/blog/${post.slug}</loc>\n\t\t<lastmod>${post.date}</lastmod>\n\t</url>`
		)
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
};
