import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { animation } from "../utils/settings";
import styles from "../styles/Subheading.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Subheading = (props: { children: React.ReactNode }) => {
	const { children } = props;
	let subheading = useRef(null) as any;

	useEffect(() => {
		if (window.location.pathname === "/") {
			gsap.from(subheading, {
				...animation,
				scrollTrigger: {
					trigger: subheading,
				},
			});
		}
	});

	return (
		<h3
			className={styles.subheading}
			ref={(e) => {
				subheading = e;
			}}
		>
			{children}
		</h3>
	);
};

export default Subheading;
