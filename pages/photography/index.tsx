import Head from "next/head";
import { PhotographyGrid } from "../../components";
import PhotographyLayout from "../../layouts/PhotographyLayout";

const Photography = () => {
	return (
		<>
			<Head>
				<title>Photography | Ahmet K | Full Stack Web Developer</title>
				<meta httpEquiv="content-type" content="text/html; charset=utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta id="viewport" name="viewport" content="width=device-width" />
				<meta name="apple-mobile-web-app-title" content="ahmetk.dev" />
				<meta name="application-name" content="ahmetk.dev" />
				<meta name="theme-color" content="rgb(127, 62, 165)" />

				<meta name="title" content="Ahmet Kilinc Full Stack Web Developer" />
				<meta name="description" content="My personal portfolio and website to showcase some of my projects." />

				<link rel="icon" href="/favicon.ico" />

				<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
				<link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#333333" />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://ahmetk.dev/photography" />
				<meta property="og:title" content="Ahmet Kilinc Full Stack Web Developer" />
				<meta property="og:description" content="My personal portfolio and website to showcase some of my projects." />
				<meta property="og:image" content="/images/hero.jpg" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://ahmetk.dev/photography" />
				<meta property="twitter:title" content="Ahmet Kilinc Full Stack Web Developer" />
				<meta property="twitter:description" content="My personal portfolio and website to showcase some of my projects." />
				<meta property="twitter:image" content="/images/hero.jpg" />
			</Head>
			<PhotographyLayout>
				<PhotographyGrid />
			</PhotographyLayout>
		</>
	);
};

export default Photography;
