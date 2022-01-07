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
				<title>{frontMatter.title} | Blog | Ahmet Kilinc | Full Stack Web Developer</title>

				{/* ADD KEYWORDS */}

				<meta property="og:url" content={`https://ahmetk.dev/blog/${slug}`} />
				<meta property="twitter:url" content={`https://ahmetk.dev/blog/${slug}`} />
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
