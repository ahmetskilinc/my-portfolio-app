import dynamic from "next/dynamic";
import { SectionWrapper, Subheading, TechStackIconWrapper } from "../components";
import { GSAPIcon, NextJsIcon, VercelIcon } from "../components/icons";

const MainLayout = dynamic(() => import("../layouts/MainLayout"));

const TechStack = () => {
	return (
		<MainLayout>
			<SectionWrapper>
				<Subheading>Tech</Subheading>
				{/* NEXTJS */}
				<TechStackIconWrapper>
					<NextJsIcon />
				</TechStackIconWrapper>

				{/* GSAP */}
				<TechStackIconWrapper>
					<GSAPIcon />
				</TechStackIconWrapper>

				{/* VERCEL */}
				<TechStackIconWrapper>
					<VercelIcon />
				</TechStackIconWrapper>
			</SectionWrapper>
		</MainLayout>
	);
};

export default TechStack;
