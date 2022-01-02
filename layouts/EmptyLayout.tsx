import { Footer, SectionWrapper } from "../components";

const EmptyLayout = (props: { children: React.ReactNode }) => {
	return (
		<>
			<SectionWrapper>{props.children}</SectionWrapper>
			<Footer />
		</>
	);
};

export default EmptyLayout;
