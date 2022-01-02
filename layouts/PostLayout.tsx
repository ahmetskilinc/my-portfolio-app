import { BlogPostAppBar, Footer, SectionWrapper } from "../components";

const PostLayout = (props: { children: React.ReactNode }) => {
	return (
		<>
			<BlogPostAppBar />
			<SectionWrapper>{props.children}</SectionWrapper>
			<Footer />
		</>
	);
};

export default PostLayout;
