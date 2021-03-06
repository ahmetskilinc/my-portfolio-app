import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { animation } from "../lib/settings";
import styles from "../styles/Project.module.scss";
import Image from "next/image";
import type { dataType } from "../types/data";

gsap.registerPlugin(ScrollTrigger);

const Project = (props: { data: dataType; index: number }) => {
	const { image, title, desc, complete, demoUrl, sourceUrl } = props.data;
	const { index } = props;
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
	}, [projectInfo, projectImage]);

	return (
		<div key={image} className={`${styles.wrapper} ${!(index % 2) ? styles.projectReverse : ""}`}>
			<div
				className={styles.projectImage}
				ref={(e) => {
					projectImage = e;
				}}
			>
				<Image src={require(`../public/images/projects/${image}.png`)} alt={image} layout="responsive" placeholder="blur" />
			</div>
			<div
				className={styles.info}
				ref={(e) => {
					projectInfo = e;
				}}
			>
				<p>{title}</p>
				<p>{desc}</p>
				{complete ? (
					<span>
						<a target="_blank" rel="noreferrer" href={demoUrl}>
							Demo
						</a>
						<a target="_blank" rel="noreferrer" href={sourceUrl}>
							Source
						</a>
					</span>
				) : (
					<p style={{ margin: 0 }}>Still in progress</p>
				)}
			</div>
		</div>
	);
};

export default Project;
