import Link from "next/link";
import dynamic from "next/dynamic";
import type { Post } from "../../types/post";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BlogLayout = dynamic(() => import("../../layouts/BlogLayout"));

const Blog = (props: { posts: [Post] }) => {
	const { posts } = props;
	return (
		<BlogLayout>
			{posts.map((post: Post, index) => (
				<div key={post.frontMatter.title} className="card-body">
					<Link href={"/blog/" + post.slug} passHref key={index}>
						<a>
							<h2 className="card-title">{post.frontMatter.title}</h2>
						</a>
					</Link>
					<p className="card-text">{post.frontMatter.description}</p>
					<p className="card-text"></p>
					<h5>
						{" "}
						<small className="text-muted">{post.frontMatter.date}</small> -{" "}
						{post.frontMatter.tags.map((tag, index) => tag + (post.frontMatter.tags.length !== index + 1 ? ", " : ""))}
					</h5>
				</div>
			))}
		</BlogLayout>
	);
};

export const getStaticProps = async () => {
	const files = fs.readdirSync(path.join("./posts"));
	const posts = files.map((filename) => {
		const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
		const { data: frontMatter } = matter(markdownWithMeta);
		return {
			frontMatter,
			slug: filename.split(".")[0],
		};
	});
	return {
		props: {
			posts,
		},
	};
};

export default Blog;
