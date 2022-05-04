import Head from "next/head";
import { Footer, Slider } from "../components";
import { useRouter } from "next/router";

const MainLayout = (props: { children: React.ReactNode }) => {
	const router = useRouter();
	return (
		<>
			<Head>
				<meta property="og:url" content="https://ahmetk.dev" />
				<meta property="twitter:url" content="https://ahmetk.dev" />

				<meta name="keywords" content="HTML, CSS, JavaScript, Blog, Tech, Student, Web Developer, Full-Stack, Ahmet, Kilinc, Ahmet Kilinc, AhmetK" />
			</Head>
			{router.pathname === "/" ? <Slider /> : null}
			{props.children}
			<Footer />
		</>
	);
};

export default MainLayout;
