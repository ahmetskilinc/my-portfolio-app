import Link from "next/link";
import styles from "../styles/BlogAppBar.module.scss";
import { Subheading } from ".";

const TopBar = ({ title }: { title: string }) => (
	<div className={styles.blogAppBarWrapper}>
		<div className={styles.blogAppBarLeft}>
			<Link href="/" passHref>
				<a>Home</a>
			</Link>
		</div>
		<div className={styles.blogAppBarCenter}>
			<Subheading>{title}</Subheading>
		</div>
		<div className={styles.blogAppBarRight}></div>
	</div>
);

export default TopBar;
