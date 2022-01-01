import posts from "../../data/posts.json";
import Link from "next/link";
import BlogLayout from "../../layouts/BlogLayout";

interface Post {
	id: string;
	title: string;
	content: string;
}

const Blog = () => {
	return (
		<BlogLayout>
			{posts.map((post: Post) => (
				<Link key={post.id} href={`/blog/${post.id}`}>
					<a>
						<h2>{post.title}</h2>
					</a>
				</Link>
			))}
		</BlogLayout>
	);
};

export default Blog;
