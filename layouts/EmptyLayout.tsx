import Link from "next/link";
import { SectionWrapper } from "../components";

const EmptyLayout = (props: { children: React.ReactNode }) => {
	return (
		<>
			<SectionWrapper>{props.children}</SectionWrapper>
			<div style={{ textAlign: "center" }}>
				<Link href="/" passHref>
					<a>/home</a>
				</Link>
			</div>
		</>
	);
};

export default EmptyLayout;
