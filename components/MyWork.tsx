import { Project } from ".";
import type { dataType } from "../types/data";
import { SectionWrapper, Subheading } from "./";

const MyWork = ({ work }: { work: dataType[] }) => {
	return (
		<SectionWrapper>
			<Subheading>some of my work</Subheading>
			<div>
				{work.map((data, index) => (
					<Project key={data.image} data={data as dataType} index={index} />
				))}
			</div>
		</SectionWrapper>
	);
};

export default MyWork;
