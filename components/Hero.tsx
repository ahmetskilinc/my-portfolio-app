import { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import HeroImage from "./HeroImage";
import { animation } from "../utils/settings";

const HeroWrapper = styled.div`
	overflow: hidden;
	min-height: 500px;
	height: 100vh;
	width: 100vw;
	color: #e9e9e9;
	display: flex;
	text-align: center;

	@media only screen and (max-width: 800px) {
		flex-direction: column-reverse;
	}
`;

const HeroLeft = styled.div`
	background: linear-gradient(225deg, rgb(51, 43, 65), rgb(78, 75, 81));
	width: 50%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: -1;

	&:after {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background-color: rgba(39, 39, 39, 0.14);
	}

	@media only screen and (max-width: 800px) {
		height: 50%;
		width: 100%;
		background: linear-gradient(45deg, rgb(51, 43, 65), rgb(78, 75, 81));
	}
`;

const HeroRight = styled.div`
	background: linear-gradient(135deg, #332b41, #4e4b51);
	width: 50%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media only screen and (max-width: 800px) {
		width: 100%;
		height: 50%;
	}
`;

const HeroHeading = styled.h1`
	margin: 14px;
	opacity: 1;
	font-size: 2rem;
	font-weight: 300;
	letter-spacing: 4px;
	color: #e9e9e9;

	@media only screen and (max-width: 400px) {
		font-size: 1.6rem;
	}
`;
const HeroSubheading = styled.h2`
	margin: 14px;
	font-weight: 300;
	opacity: 1;
	letter-spacing: 4px;
	color: #e9e9e9;
	margin: 0;
	font-size: 1.1rem;
	letter-spacing: 0;
	max-width: 410px;

	@media only screen and (max-width: 400px) {
		font-size: 0.9rem;
		max-width: 328px;
	}
`;

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
		<HeroWrapper>
			<HeroLeft>
				<HeroImage />
				{/* <div className="overlay"></div> */}
			</HeroLeft>
			<HeroRight>
				<HeroHeading
					ref={(e) => {
						heroTextHeader = e;
					}}
				>
					Hey!
				</HeroHeading>
				<HeroSubheading
					ref={(e) => {
						heroTextCopy = e;
					}}
					className="hero-subheading"
				>
					I&apos;m Ahmet, a{" "}
					<span
						style={{
							color: "rgb(201, 121, 248)",
						}}
					>
						Full Stack
					</span>{" "}
					Web Developer from{" "}
					<span
						style={{
							color: "rgb(201, 121, 248)",
						}}
					>
						London
					</span>
					.
				</HeroSubheading>
			</HeroRight>
		</HeroWrapper>
	);
};

export default Hero;
