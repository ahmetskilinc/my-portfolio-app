export interface Post {
	slug: string;
	frontMatter: {
		title: string;
		description: string;
		date: string;
		tags: string[];
		author: string;
	};
}
