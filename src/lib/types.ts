export interface Product {
	readonly name: string;
	readonly url: string;
	readonly imageUrl: string;
	readonly price: string;
}

/**
 * A group of invite products for a single shop. The products page renders one
 * section per group (heading = `shop`), so adding a shop is just adding another
 * entry to `invitations.json`.
 */
export interface ProductGroup {
	readonly shop: string;
	readonly products: readonly Product[];
}

/**
 * A blog post. Add posts to `src/lib/data/blog/posts.ts`; the index and the
 * `[slug]` route render them automatically. `content` is trusted HTML authored
 * by us (rendered with {@html}).
 */
export interface BlogPost {
	readonly slug: string;
	readonly title: string;
	readonly date: string; // ISO date, e.g. "2026-07-05"
	readonly excerpt: string;
	readonly author?: string;
	readonly tags?: readonly string[];
	readonly coverImage?: string; // optional cover/hero image URL or /static path
	readonly coverAlt?: string; // alt text for the cover image
	readonly gallery?: readonly GalleryImage[]; // optional image carousel shown after the body
	readonly content: string; // trusted HTML for the post body
}

/** An image in a blog post's gallery carousel. */
export interface GalleryImage {
	readonly src: string;
	readonly alt: string;
	readonly caption?: string;
}
