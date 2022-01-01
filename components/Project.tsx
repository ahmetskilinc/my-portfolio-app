import { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { animation } from "../utils/settings";

gsap.registerPlugin(ScrollTrigger);

interface Props {
	reverse?: boolean;
}

export const ProjectWrapper = styled.div<Props>`
	margin-bottom: 58px;
	&:last-of-type {
		margin: 0;
	}
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	${(props) => props.reverse === true && `flex-direction: row-reverse;`}
	@media only screen and (max-width: 800px) {
		flex-direction: column;
	}
`;

export const ProjectImage = styled.img`
	display: block;
	border-radius: 4px;
	box-shadow: 0px 10px 32px -16px rgba(61, 61, 61, 0.9);
	height: auto;
	@media only screen and (max-width: 800px) {
		width: 100%;
	}
`;

export const ProjectInfo = styled.div<Props>`
	box-shadow: 0px 21px 60px -20px rgba(61, 61, 61, 0.9);
	border-radius: 4px;
	padding: 20px;
	color: #f8f8f8;
	position: relative;
	background-color: #6b6b6b;
	width: 42%;
	height: 70%;

	${(props) => {
		if (props.reverse) {
			return `
				left: 3%;
				right: 0;
				text-align: right;
			`;
		} else {
			return `
				left: -3%;
				right: 0;
				text-align: left;
			`;
		}
	}}

	a {
		color: #f8f8f8;
	}

	a:hover {
		color: #c6c6c6;
	}

	a:first-of-type {
		margin-right: 20px;
	}

	h3 {
		font-size: 16px;
	}

	ul li,
	p,
	a {
		font-size: 14px;
		margin-top: 0;
		color: #f8f8f8;
	}

	p > a {
		margin-right: 0 !important;
	}

	@media only screen and (max-width: 800px) {
		width: 70%;
		margin-top: -7%;
		left: 0;
		right: 0;
		text-align: left;
		h3 {
			font-size: 14px;
		}
		ul li,
		p,
		p > a {
			font-size: 12px;
		}
	}

	@media only screen and (max-width: 500px) {
		width: 90%;
	}
`;

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
		<ProjectWrapper reverse={reverse}>
			<picture>
				<source srcSet={`/images/projects/${src}.webp`} type="image/webp" />
				<ProjectImage
					ref={(e) => {
						projectImage = e;
					}}
					src={`/images/projects/${src}.png`}
					alt={alt}
					height="383"
					width="612"
				/>
			</picture>
			<ProjectInfo
				reverse={reverse}
				ref={(e) => {
					projectInfo = e;
				}}
			>
				{children}
			</ProjectInfo>
		</ProjectWrapper>
	);
};

export default Project;
