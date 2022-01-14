import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import "../styles/globals.scss";
import Head from "next/head";

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
				<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
				<script
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
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
