import dynamic from "next/dynamic";
import { Project } from ".";
import type { dataType } from "../types/data";

import Data from "../data/work.json";

const SectionWrapper = dynamic(() => import("./SectionWrapper"));
const Subheading = dynamic(() => import("./Subheading"));

const MyWork = () => {
	return (
		<SectionWrapper>
			<Subheading>some of my work</Subheading>
			<div>
				{Data.map((data, index) => (
					<Project key={data.image} data={data as dataType} index={index} />
				))}
			</div>
		</SectionWrapper>
	);
};

export default MyWork;
