import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { animation } from "../utils/settings";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const CustomSubheading = styled.h3`
	text-align: center;
	margin-bottom: 40px;
`;

const Subheading = (props: { children: React.ReactNode }) => {
	const { children } = props;
	let subheading = useRef(null) as any;

	useEffect(() => {
		if (window.location.pathname === "/") {
			gsap.from(subheading, {
				...animation,
				scrollTrigger: {
					trigger: subheading,
				},
			});
		}
	});

	return (
		<CustomSubheading
			ref={(e) => {
				subheading = e;
			}}
		>
			{children}
		</CustomSubheading>
	);
};

export default Subheading;
