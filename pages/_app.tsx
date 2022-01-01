import "../styles/globals.css";
import type { AppProps } from "next/app";
import Slider from "../components/Slider";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Component {...pageProps}>
			<Slider />
		</Component>
	);
}

export default MyApp;
