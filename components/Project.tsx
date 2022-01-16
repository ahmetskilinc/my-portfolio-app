import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../styles/Project.module.scss";
import Image from "next/image";
import type { dataType } from "../types/data";

gsap.registerPlugin(ScrollTrigger);

const Project = (props: { data: dataType; index: number }) => {
	const { image, title, desc, complete, demoUrl, sourceUrl } = props.data;

	return (
		<div key={image} className={styles.wrapper}>
			<div className={styles.projectImage}>
				<Image src={require(`../public/images/projects/${image}.png`)} alt={image} layout="responsive" placeholder="blur" />
			</div>
			<div className={styles.info}>
				<p>{title}</p>
				<p>{desc}</p>
				{complete ? (
					<span>
						<a target="_blank" rel="noreferrer" href={demoUrl}>
							Demo
						</a>
						{" | "}
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
