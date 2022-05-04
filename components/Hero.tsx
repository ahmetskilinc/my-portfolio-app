import { useRef, useEffect } from "react";
import styles from "../styles/Hero.module.scss";
import gsap from "gsap";
import { animation } from "../lib/settings";
import { HeroImage } from "./";

const Hero = () => {
	let heroTextHeader = useRef(null) as any;
	let heroTextCopy = useRef(null) as any;

	useEffect(() => {
		gsap.from(heroTextHeader, {
			...animation,
			delay: 1,
		});

		gsap.from(heroTextCopy, {
			...animation,
			delay: 1.2,
		});
	});
	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<HeroImage />
			</div>
			<div className={styles.right}>
				<h1
					className={styles.heading}
					ref={(e) => {
						heroTextHeader = e;
					}}
				>
					Hey!
				</h1>
				<h2
					className={styles.subheading}
					ref={(e) => {
						heroTextCopy = e;
					}}
				>
					I&apos;m Ahmet, a{" "}
					<span
						style={{
							fontFamily: "Roboto Slab, serif",
							color: "rgb(214 143 255)",
						}}
					>
						Full-Stack
					</span>{" "}
					Web Developer from{" "}
					<span
						style={{
							fontFamily: "Roboto Slab, serif",
							color: "rgb(214 143 255)",
						}}
					>
						London
					</span>
					.
				</h2>
			</div>
		</div>
	);
};

export default Hero;
