import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";
import type { Post } from "../../types/post";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BlogLayout = dynamic(() => import("../../layouts/BlogLayout"));

const Blog = (props: { posts: [Post] }) => {
	const { posts } = props;
	return (
		<>
			<Head>
				<title>Blog | Ahmet K | Full Stack Web Developer</title>
				<meta httpEquiv="content-type" content="text/html; charset=utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta id="viewport" name="viewport" content="width=device-width" />
				<meta name="apple-mobile-web-app-title" content="ahmetk.dev" />
				<meta name="application-name" content="ahmetk.dev" />
				<meta name="theme-color" content="rgb(127, 62, 165)" />

				<meta name="title" content="Ahmet Kilinc Full Stack Web Developer" />
				<meta name="description" content="My personal portfolio and website to showcase some of my projects." />

				<link rel="icon" href="/favicon.ico" />

				<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
				<link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#333333" />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://ahmetk.dev/blog" />
				<meta property="og:title" content="Ahmet Kilinc Full Stack Web Developer" />
				<meta property="og:description" content="My personal portfolio and website to showcase some of my projects." />
				<meta property="og:image" content="/images/hero.jpg" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://ahmetk.dev/blog" />
				<meta property="twitter:title" content="Ahmet Kilinc Full Stack Web Developer" />
				<meta property="twitter:description" content="My personal portfolio and website to showcase some of my projects." />
				<meta property="twitter:image" content="/images/hero.jpg" />
			</Head>
			<BlogLayout>
				{posts.map((post: Post, index) => (
					<Link href={"/blog/" + post.slug} passHref key={index}>
						<a>
							<div className="card mb-3 pointer" style={{ maxWidth: "540px" }}>
								<div className="row g-0">
									<div className="col-md-8">
										<div className="card-body">
											<h5 className="card-title">{post.frontMatter.title}</h5>
											<p className="card-text">{post.frontMatter.description}</p>
											<p className="card-text">
												<small className="text-muted">{post.frontMatter.date}</small>
											</p>
											<p>{post.frontMatter.tags.map((tag, index) => tag + (post.frontMatter.tags.length !== index + 1 ? ", " : ""))}</p>
										</div>
									</div>
								</div>
							</div>
						</a>
					</Link>
				))}
			</BlogLayout>
		</>
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
