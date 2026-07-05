import { error } from '@sveltejs/kit';
import { getPost, posts } from '$lib/data/blog/posts';
import type { EntryGenerator, PageLoad } from './$types';

// Tell the prerenderer which slugs to generate (also crawled from the index).
export const entries: EntryGenerator = () => posts.map((p) => ({ slug: p.slug }));

export const load: PageLoad = ({ params }) => {
	const post = getPost(params.slug);
	if (!post) throw error(404, 'Post not found');
	return { post };
};
