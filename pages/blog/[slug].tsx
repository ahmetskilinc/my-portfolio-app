import dynamic from "next/dynamic";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import readingTime from "reading-time";
import ReactMarkdown from "react-markdown";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

const PostLayout = dynamic(() => import("../../layouts/PostLayout"));

const BlogPost = (props: { frontMatter: any; slug: string; content: string }) => {
	const { frontMatter, slug, content } = props;
	const readTime = readingTime(content);

	return (
		<>
			<Head>
				<title>{frontMatter.title} | Blog | Ahmet K | Full Stack Web Developer</title>
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
				<meta property="og:url" content={`https://ahmetk.dev/blog/${slug}`} />
				<meta property="og:title" content="Ahmet Kilinc Full Stack Web Developer" />
				<meta property="og:description" content="My personal portfolio and website to showcase some of my projects." />
				<meta property="og:image" content="/images/hero.jpeg" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content={`https://ahmetk.dev/blog/${slug}`} />
				<meta property="twitter:title" content="Ahmet Kilinc Full Stack Web Developer" />
				<meta property="twitter:description" content="My personal portfolio and website to showcase some of my projects." />
				<meta property="twitter:image" content="/images/hero.jpeg" />
			</Head>
			<PostLayout>
				<h2>{frontMatter.title}</h2>
				<h4>{frontMatter.description}</h4>
				<h5>
					{frontMatter.author} - {frontMatter.date} - {readTime.text}
				</h5>
				<ReactMarkdown
					plugins={[remarkGfm]}
					components={{
						code({ node, inline, className, children, ...props }) {
							const match = /language-(\w+)/.exec(className || "");
							return !inline && match ? (
								<SyntaxHighlighter style={okaidia} language={match[1]} PreTag="div" {...props}>
									{String(children).replace(/\n$/, "")}
								</SyntaxHighlighter>
							) : (
								<code className={className} {...props}>
									{children}
								</code>
							);
						},
					}}
				>
					{content}
				</ReactMarkdown>
			</PostLayout>
		</>
	);
};

export const getStaticPaths = async () => {
	const files = fs.readdirSync(path.join("./posts"));
	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace(".md", ""),
		},
	}));
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (props: { params: { slug: string } }) => {
	const { slug } = props.params;
	const markdownWithMeta = fs.readFileSync(path.join("./posts", slug + ".md"), "utf-8");
	const { data: frontMatter, content } = matter(markdownWithMeta);

	return {
		props: {
			frontMatter,
			slug,
			content,
		},
	};
};

export default BlogPost;
