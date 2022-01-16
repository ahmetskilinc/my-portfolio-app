import { useRef, useEffect } from "react";
import { animation } from "../utils/settings";
import dynamic from "next/dynamic";
import { Carousel } from "react-responsive-carousel";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import type { dataType } from "../types/data";

import Data from "../data/work.json";
gsap.registerPlugin(ScrollTrigger);

const SectionWrapper = dynamic(() => import("./SectionWrapper"));
const Subheading = dynamic(() => import("./Subheading"));
const Project = dynamic(() => import("./Project"));

const MyWork = () => {
	let carousel = useRef(null) as any;

	useEffect(() => {
		gsap.from(carousel, {
			...animation,
			scrollTrigger: {
				trigger: carousel,
			},
		});
	});

	return (
		<SectionWrapper>
			<Subheading>some of my work</Subheading>
			<div
				className="gsap-initial"
				ref={(e) => {
					carousel = e;
				}}
			>
				<Carousel showThumbs={false} showArrows={true}>
					{Data.map((data, index) => (
						<Project key={data.image} data={data as dataType} index={index} />
					))}
				</Carousel>
			</div>
		</SectionWrapper>
	);
};

export default MyWork;
