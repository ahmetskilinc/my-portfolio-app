import { useRef, useEffect } from "react";
import styles from "../styles/HeroImage.module.scss";
import gsap from "gsap";
import { animation } from "../utils/settings";
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
	});

	return (
		<div
			className={styles.imageWrapper}
			ref={(e: any) => {
				heroImage = e;
			}}
		>
			<source srcSet="/images/hero.webp" type="image/webp" />
			<Image src="/images/hero.jpg" alt="Me!" layout="fill" />
		</div>
	);
};

export default HeroImage;