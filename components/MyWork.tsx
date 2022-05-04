import { Project } from ".";
import type { dataType } from "../types/data";
import { SectionWrapper, Subheading } from "./";

import Data from "../data/work.json";

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
