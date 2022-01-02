import { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { animation } from "../utils/settings";
import Image from "next/image";

const HeroImageWrapper = styled.div`
	opacity: 1;
	height: 540px;
	width: 420px;
	position: absolute;
	top: calc(50% - 270px);
	left: calc(50% - 210px);

	@media only screen and (max-width: 800px) {
		position: unset;
		top: unset;
		left: unset;
		height: 100%;
		width: 100%;
	}
	& > span > img {
		display: block;
		object-fit: cover;
		border-radius: 6px;

		@media only screen and (max-width: 800px) {
			border-radius: 0;
		}
	}
`;

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
		<HeroImageWrapper
			ref={(e: any) => {
				heroImage = e;
			}}
		>
			<source srcSet="/images/hero.webp" type="image/webp" />
			<Image src="/images/hero.jpg" alt="Me!" layout="fill" />
		</HeroImageWrapper>
	);
};

export default HeroImage;
