import { SectionWrapper, Subheading, TechStackIconWrapper } from "../components";
import { GSAPIcon, NextJsIcon, VercelIcon } from "../components/icons";
import { MainLayout } from "../layouts";

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
