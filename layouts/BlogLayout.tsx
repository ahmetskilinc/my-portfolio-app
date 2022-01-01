import BlogAppBar from "../components/BlogAppBar";
import Footer from "../components/Footer";
import SectionWrapper from "../components/SectionWrapper";

const BlogLayout = (props: { children: React.ReactNode }) => {
	return (
		<>
			<BlogAppBar />
			<SectionWrapper>{props.children}</SectionWrapper>
			<Footer />
		</>
	);
};

export default BlogLayout;
