import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../styles/ContactMe.module.scss";
import { animation } from "../lib/settings";
import { SectionWrapper, Subheading } from "./";
import Button from "./Button";
import { DownloadIcon, EmailIcon } from "./icons";

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
	let ctaContainer = useRef(null) as any;

	useEffect(() => {
		gsap.from(ctaContainer, {
			...animation,
			scrollTrigger: {
				trigger: ctaContainer,
			},
		});
	});

	return (
		<SectionWrapper>
			<Subheading>contact me</Subheading>
			<div
				className={styles.ctaContainer}
				ref={(e) => {
					ctaContainer = e;
				}}
			>
				<Button href="/ahmet_kilinc_resume.pdf">
					My Resume
					<DownloadIcon />
				</Button>
				<Button href="mailto:hey@ahmetk.dev">
					Email Me
					<EmailIcon />
				</Button>
			</div>
		</SectionWrapper>
	);
};

export default ContactMe;
