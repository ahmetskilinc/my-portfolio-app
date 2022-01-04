import SectionWrapper from "./SectionWrapper";
import Subheading from "./Subheading";
import { Project } from ".";
import type { dataType } from "../types/data";

import Data from "../data/work.json";

const MyWork = () => {
	return (
		<SectionWrapper>
			<Subheading>some of my work</Subheading>
			<div>
				{Data.map((data) => (
					<Project key={data.image} data={data as dataType} />
				))}
			</div>
		</SectionWrapper>
	);
};

export default MyWork;
