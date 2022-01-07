import Head from "next/head";
import { BlogPostsAppBar, Footer, SectionWrapper } from "../components";

const BlogLayout = (props: { children: React.ReactNode }) => {
	return (
		<>
			<Head>
				<title>Blog | Ahmet Kilinc | Full Stack Web Developer</title>

				<meta property="og:url" content="https://ahmetk.dev/blog" />
				<meta property="twitter:url" content="https://ahmetk.dev/blog" />
			</Head>
			<BlogPostsAppBar />
			<SectionWrapper>{props.children}</SectionWrapper>
			<Footer />
		</>
	);
};

export default BlogLayout;
