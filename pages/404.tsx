import { useEffect, useRef, useState } from "react";
import type { LottiePlayer } from "lottie-web";
import dynamic from "next/dynamic";

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
			<div style={{ maxWidth: "500px", margin: "0 auto" }} ref={ref} />
			<p style={{ textAlign: "center" }}>4oh4: some sort of error?</p>
		</EmptyLayout>
	);
};

export default FourOhFour;
