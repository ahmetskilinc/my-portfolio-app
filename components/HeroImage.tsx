import { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { animation } from "../utils/settings";

const HeroImageWrapper = styled.img`
	opacity: 1;
	height: 540px;
	width: 420px;
	position: absolute;
	top: calc(50% - 270px);
	left: calc(50% - 210px);
	display: block;
	object-fit: cover;
	border-radius: 6px;

	@media only screen and (max-width: 800px) {
		position: unset;
		top: unset;
		left: unset;
		height: 100%;
		width: 100%;
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
		<picture>
			<source srcSet="/images/hero.webp" type="image/webp" />
			<HeroImageWrapper
				ref={(e) => {
					heroImage = e;
				}}
				src="/images/hero.jpg"
				alt="Me!"
			/>
		</picture>
	);
};

export default HeroImage;
