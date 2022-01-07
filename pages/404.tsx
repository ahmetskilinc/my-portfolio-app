import { useEffect, useRef, useState } from "react";
import type { LottiePlayer } from "lottie-web";
import dynamic from "next/dynamic";
import Head from "next/head";

const EmptyLayout = dynamic(() => import("../layouts/EmptyLayout"));

const FourOhFour = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [lottie, setLottie] = useState<LottiePlayer | null>(null);

	useEffect(() => {
		import("lottie-web").then((Lottie) => setLottie(Lottie.default));
	}, []);

	useEffect(() => {
		if (lottie && ref.current) {
			const animation = lottie.loadAnimation({
				container: ref.current,
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
			<div style={{ maxWidth: "500px", margin: "0 auto" }} ref={ref} />
			<p style={{ textAlign: "center" }}>4oh4: some sort of error?</p>
		</EmptyLayout>
	);
};

export default FourOhFour;
