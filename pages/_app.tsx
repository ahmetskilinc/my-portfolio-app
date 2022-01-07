import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Ahmet K | Full Stack Web Developer</title>
				<meta httpEquiv="content-type" content="text/html; charset=utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="apple-mobile-web-app-title" content="ahmetk.dev" />
				<meta name="application-name" content="ahmetk.dev" />
				<meta name="theme-color" content="rgb(127, 62, 165)" />

				<meta name="title" content="Ahmet Kilinc Full Stack Web Developer" />
				<meta name="description" content="My personal portfolio and blog to showcase some of my projects." />
				<meta name="keywords" content="Web Developer, Web, Developer, Full Stack, Full, Stack, Blog, Photography" />

				<link rel="icon" href="/favicon.ico" />

				<link rel="apple-touch-icon" sizes="180x180" href="./src/static/images/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="./src/static/images/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="./src/static/images/favicon-16x16.png" />
				<link rel="mask-icon" href="./src/static/images/safari-pinned-tab.svg" color="#333333" />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://ahmetk.dev/" />
				<meta property="og:title" content="Ahmet Kilinc Full Stack Web Developer" />
				<meta property="og:description" content="My personal portfolio and website to showcase some of my projects." />
				<meta property="og:image" content="/images/hero.jpeg" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://ahmetk.dev/" />
				<meta property="twitter:title" content="Ahmet Kilinc Full Stack Web Developer" />
				<meta property="twitter:description" content="My personal portfolio and website to showcase some of my projects." />
				<meta property="twitter:image" content="/images/hero.jpeg" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
