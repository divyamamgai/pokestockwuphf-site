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
