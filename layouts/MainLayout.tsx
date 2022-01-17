import Head from "next/head";
import { Footer, Slider } from "../components";

const MainLayout = (props: { children: React.ReactNode }) => {
	return (
		<>
			<Head>
				<meta property="og:url" content="https://ahmetk.dev" />
				<meta property="twitter:url" content="https://ahmetk.dev" />
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
