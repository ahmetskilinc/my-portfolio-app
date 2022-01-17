import Head from "next/head";
import { Footer, PhotographyAppBar, SectionWrapper } from "../components";

const PhotographyLayout = (props: { children: React.ReactNode }) => {
	return (
		<>
			<Head>
				<title>Photography | Ahmet Kilinc | Full Stack Web Developer</title>

				<meta name="description" content="A place to showcase my amateur photography" />
				<meta property="og:url" content="https://ahmetk.dev/photography" />
				<meta property="twitter:url" content="https://ahmetk.dev/photography" />
			</Head>
			<PhotographyAppBar />
			<SectionWrapper>{props.children}</SectionWrapper>
			<Footer />
		</>
	);
};

export default PhotographyLayout;
