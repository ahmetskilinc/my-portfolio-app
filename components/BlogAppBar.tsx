import Link from "next/link";
import styles from "../styles/BlogAppBar.module.scss";
import Subheading from "./Subheading";

const BlogPostsAppBar = () => {
	return (
		<div className={styles.blogAppBarWrapper}>
			<div className={styles.blogAppBarLeft}>
				<Link href="/" passHref>
					<a>Home</a>
				</Link>
			</div>
			<div className={styles.blogAppBarCenter}>
				<Subheading>Ahmet&apos;s Blog</Subheading>
			</div>
			<div className={styles.blogAppBarRight}></div>
		</div>
	);
};

const BlogPostAppBar = () => {
	return (
		<div className={styles.blogAppBarWrapper}>
			<div className={styles.blogAppBarLeft}>
				<Link href="/blog" passHref>
					<a>Posts</a>
				</Link>
			</div>
			<div className={styles.blogAppBarCenter}>
				<Subheading>Ahmet&apos;s Blog</Subheading>
			</div>
			<div className={styles.blogAppBarRight}></div>
		</div>
	);
};

export { BlogPostsAppBar, BlogPostAppBar };
