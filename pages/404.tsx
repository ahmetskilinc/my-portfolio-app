import type { LottiePlayer } from "lottie-web";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { EmptyLayout } from "../layouts";

const FourOhFour: NextPage = () => {
	let lottieContainer = useRef(null) as any;
	const [lottie, setLottie] = useState<LottiePlayer | null>(null);

	useEffect(() => {
		import("lottie-web").then((Lottie) => setLottie(Lottie.default));
	}, []);

	useEffect(() => {
		if (lottie && lottieContainer.current) {
			const animation = lottie.loadAnimation({
				container: lottieContainer.current,
				renderer: "svg",
				loop: true,
				autoplay: true,
				path: "/404-animation.json",
			});

			return () => animation.destroy();
		}
	}, [lottie]);

	return (
		<EmptyLayout>
			<Head>
				<title>Error Mate | Ahmet Kilinc | Full Stack Web Developer</title>
			</Head>
			<div
				style={{ maxWidth: "500px", margin: "0 auto" }}
				ref={(e) => {
					lottieContainer = e;
				}}
			/>
			<p style={{ textAlign: "center" }}>4oh4: some sort of error?</p>
		</EmptyLayout>
	);
};

export default FourOhFour;
