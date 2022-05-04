import Link from "next/link";
import styles from "../styles/BlogAppBar.module.scss";
import { Subheading } from "./";

const PhotographyHeader = () => (
	<div className={styles.blogAppBarWrapper}>
		<div className={styles.blogAppBarLeft}>
			<Link href="/" passHref>
				<a>Home</a>
			</Link>
		</div>
		<div className={styles.blogAppBarCenter}>
			<Subheading>My Amatuer Photography</Subheading>
		</div>
		<div className={styles.blogAppBarRight}></div>
	</div>
);

export default PhotographyHeader;
