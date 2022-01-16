import Link from "next/link";
import { SectionWrapper } from "../components";

const EmptyLayout = (props: { children: React.ReactNode }) => {
	return (
		<>
			<SectionWrapper>{props.children}</SectionWrapper>
			<div style={{ textAlign: "center", display: "grid", gridGap: "12px", flex: "row" }}>
				<Link href="/" passHref>
					<a>/home</a>
				</Link>
				<Link href="/photography" passHref>
					<a>/photography</a>
				</Link>
				<Link href="/tech-stack" passHref>
					<a>/tech-stack</a>
				</Link>
			</div>
		</>
	);
};

export default EmptyLayout;
