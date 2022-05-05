import { useRef, useEffect } from "react";
import styles from "../styles/HeroImage.module.scss";
import gsap from "gsap";
import { animation } from "../lib/settings";
import Image from "next/image";

const HeroImage = () => {
	let heroImage = useRef(null) as any;

	useEffect(() => {
		gsap.from(heroImage, {
			...animation,
			x: "-400px",
			zIndex: -1,
			y: 0,
			delay: 0.7,
		});
	}, [heroImage]);

	return (
		<div
			className={styles.imageWrapper}
			ref={(e: any) => {
				heroImage = e;
			}}
		>
			<Image src={require("../public/images/hero.jpeg")} alt="Me!" layout="responsive" quality={95} priority />
		</div>
	);
};

export default HeroImage;
