import SectionWrapper from "./SectionWrapper";
import Project from "./Project";
import Subheading from "./Subheading";

import Data from "../data/work.json";

const MyWork = () => (
	<SectionWrapper>
		<Subheading>some of my work</Subheading>
		<div>
			{Data.map(({ image, title, reverse, desc, demoUrl, sourceUrl, complete }) => (
				<Project src={image} key={image} alt={title} reverse={reverse}>
					<p>{title}</p>
					<p>{desc}</p>
					{complete ? (
						<span>
							<a target="_blank" rel="noreferrer" href={demoUrl}>
								Demo
							</a>
							<a target="_blank" rel="noreferrer" href={sourceUrl}>
								Source
							</a>
						</span>
					) : (
						<p style={{ margin: 0 }}>Still in progress</p>
					)}
				</Project>
			))}
		</div>
	</SectionWrapper>
);

export default MyWork;
