import Head from "next/head";
import { Footer, Slider } from "../components";

const MainLayout = (props: { children: React.ReactNode }) => {
	return (
		<>
			<Head>
				<meta property="og:url" content="https://ahmetk.dev" />
				<meta property="twitter:url" content="https://ahmetk.dev" />

				<meta name="keywords" content="HTML, CSS, JavaScript, Blog, Tech, Student, Web Developer, Full-Stack, Ahmet, Kilinc, Ahmet Kilinc, AhmetK" />
			</Head>
			<Slider />
			<div>
				{props.children}
				<Footer />
			</div>
		</>
	);
};

export default MainLayout;
