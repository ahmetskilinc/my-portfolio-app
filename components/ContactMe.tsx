import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styled from "styled-components";
import { animation } from "../utils/settings";
import Button from "./Button";
import Subheading from "./Subheading";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
	margin-bottom: 50px;
`;

const CtaContainer = styled.div`
	text-align: center;
`;

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
		<Section>
			<Subheading>contact me</Subheading>
			<CtaContainer
				ref={(e) => {
					ctaContainer = e;
				}}
			>
				<Button href="./ahmet_kilinc_resume.pdf" download="">
					<div>
						My Resume
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
							<path
								fill="currentColor"
								d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"
							/>
						</svg>
					</div>
				</Button>
				<Button href="mailto:hey@ahmetk.dev">
					<div>
						Email Me
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path
								fill="currentColor"
								d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
							/>
						</svg>
					</div>
				</Button>
			</CtaContainer>
		</Section>
	);
};

export default ContactMe;
