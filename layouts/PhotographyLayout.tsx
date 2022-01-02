import { Footer, PhotographyAppBar, SectionWrapper } from "../components";

const PhotographyLayout = (props: { children: React.ReactNode }) => {
	return (
		<>
			<PhotographyAppBar />
			<SectionWrapper>{props.children}</SectionWrapper>
			<Footer />
		</>
	);
};

export default PhotographyLayout;
