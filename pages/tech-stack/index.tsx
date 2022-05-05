import { lazy } from "react";
import { SectionWrapper, TechStackIconWrapper, TopBar } from "../../components";
import { GSAPIcon, NextJsIcon, VercelIcon } from "../../components/icons";
import { MainLayout } from "../../layouts";

const TechStack = () => {
	return (
		<MainLayout>
			<SectionWrapper>
				<TopBar title="My Tech Stack" />
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
