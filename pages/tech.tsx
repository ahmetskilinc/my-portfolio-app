import dynamic from "next/dynamic";
import { SectionWrapper, Subheading } from "../components";

const MainLayout = dynamic(() => import("../layouts/MainLayout"));

const Tech = () => {
	return (
		<MainLayout>
			<SectionWrapper>
				<Subheading>Tech</Subheading>
				<p>this is the tech</p>
			</SectionWrapper>
		</MainLayout>
	);
};

export default Tech;
