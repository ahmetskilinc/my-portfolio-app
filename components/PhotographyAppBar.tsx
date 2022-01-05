import dynamic from "next/dynamic";

const SectionWrapper = dynamic(() => import("./SectionWrapper"));
const Subheading = dynamic(() => import("./Subheading"));

const PhotographyAppBar = () => {
	return (
		<SectionWrapper>
			<Subheading>Ahmet&apos;s Photography</Subheading>
		</SectionWrapper>
	);
};

export default PhotographyAppBar;
