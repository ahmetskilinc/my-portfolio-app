import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import "../styles/globals.scss";

import { GA_TRACKING_ID } from "../lib/gtag";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: any) => {
			gtag.pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Head>
				<title>Ahmet Kilinc | Full Stack Web Developer</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="A place to showcase my projects" />
			</Head>
			<Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${GA_TRACKING_ID}', {
						page_path: window.location.pathname,
						});
					`,
				}}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
