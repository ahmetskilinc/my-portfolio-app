import dynamic from "next/dynamic";
import { useRef, useEffect } from "react";
import styles from "../styles/Life.module.scss";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { animation } from "../utils/settings";

const SectionWrapper = dynamic(() => import("./SectionWrapper"));
const Subheading = dynamic(() => import("./Subheading"));

gsap.registerPlugin(ScrollTrigger);

const Life = () => {
	let xlnWork = useRef(null) as any;
	let absoweblyWork = useRef(null) as any;
	let kingstonUni = useRef(null) as any;
	let workHeader = useRef(null) as any;
	let educationHeader = useRef(null) as any;

	useEffect(() => {
		gsap.from(xlnWork, {
			...animation,
			scrollTrigger: {
				trigger: xlnWork,
			},
		});

		gsap.from(absoweblyWork, {
			...animation,
			scrollTrigger: {
				trigger: absoweblyWork,
			},
		});

		gsap.from(kingstonUni, {
			...animation,
			scrollTrigger: {
				trigger: kingstonUni,
			},
		});

		gsap.from(workHeader, {
			...animation,
			scrollTrigger: {
				trigger: workHeader,
			},
		});

		gsap.from(educationHeader, {
			...animation,
			scrollTrigger: {
				trigger: educationHeader,
			},
		});
	});
	return (
		<SectionWrapper>
			<Subheading>experience</Subheading>
			<div className={styles.lifeWrapper}>
				<div className={styles.lifeInnerWrapper}>
					<h2
						ref={(e) => {
							educationHeader = e;
						}}
					>
						Education
					</h2>
					<div>
						<div
							ref={(e) => {
								kingstonUni = e;
							}}
						>
							<h3>Kingston University, London</h3>
							<p>September 2017 - May 2020</p>
							<p>Computer Science BSc</p>
						</div>
					</div>
				</div>
				<div className={styles.lifeInnerWrapper}>
					<h2
						ref={(e) => {
							workHeader = e;
						}}
					>
						Work
					</h2>
					<div>
						<div
							ref={(e) => {
								xlnWork = e;
							}}
						>
							<h3>XLN | For Small Business</h3>
							<p>November 2020 - Present</p>
							<p>Junior Full Stack Web Developer</p>
						</div>
						<div
							ref={(e) => {
								absoweblyWork = e;
							}}
						>
							<h3>Absowebly Ltd</h3>
							<p>July 2018 - September 2018</p>
							<p>Junior Web Developer</p>
						</div>
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
};

export default Life;
