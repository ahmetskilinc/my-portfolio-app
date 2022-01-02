import { BlogPostsAppBar, Footer, SectionWrapper } from "../components";

const BlogLayout = (props: { children: React.ReactNode }) => {
	return (
		<>
			<BlogPostsAppBar />
			<SectionWrapper>{props.children}</SectionWrapper>
			<Footer />
		</>
	);
};

export default BlogLayout;
