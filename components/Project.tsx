import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { animation } from "../utils/settings";
import styles from "../styles/Project.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Project = (props: { src: string; alt: string; children: React.ReactNode; reverse: boolean }) => {
	const { src, alt, children, reverse } = props;
	let projectImage = useRef(null) as any;
	let projectInfo = useRef(null) as any;

	useEffect(() => {
		gsap.from(projectInfo, {
			...animation,
			y: "120px",
			delay: 0.5,
			scrollTrigger: {
				trigger: projectInfo,
			},
		});
		gsap.from(projectImage, {
			...animation,
			y: "120px",
			scrollTrigger: {
				trigger: projectImage,
			},
		});
	});

	return (
		<div className={`${styles.wrapper} ${reverse ? styles.projectReverse : ""}`}>
			<picture>
				<source srcSet={`/images/projects/${src}.webp`} type="image/webp" />
				<img
					className={styles.projectImage}
					ref={(e) => {
						projectImage = e;
					}}
					src={`/images/projects/${src}.png`}
					alt={alt}
					height="383"
					width="612"
				/>
			</picture>
			<div
				className={styles.info}
				ref={(e) => {
					projectInfo = e;
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default Project;
