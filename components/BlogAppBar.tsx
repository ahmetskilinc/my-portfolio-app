import Link from "next/link";
import styled from "styled-components";
import Subheading from "./Subheading";

const BlogAppBarWrapper = styled.div`
	display: flex;
	flex-direction: row;
	max-width: 1020px;
	margin: 32px auto;

	@media only screen and (max-width: 1020px) {
		padding: 0 24px;
	}
`;

const BlogAppBarLeft = styled.div`
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-right: auto;
`;

const BlogAppBarCenter = styled.div`
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	& > h3 {
		margin-bottom: 0;
		margin-top: 0;
	}
`;

const BlogAppBarRight = styled.div`
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-left: auto;
`;

const BlogPostsAppBar = () => {
	return (
		<BlogAppBarWrapper>
			<BlogAppBarLeft>
				<Link href="/" passHref>
					<a>Home</a>
				</Link>
			</BlogAppBarLeft>
			<BlogAppBarCenter>
				<Subheading>Ahmet&apos;s Blog</Subheading>
			</BlogAppBarCenter>
			<BlogAppBarRight></BlogAppBarRight>
		</BlogAppBarWrapper>
	);
};

const BlogPostAppBar = () => {
	return (
		<BlogAppBarWrapper>
			<BlogAppBarLeft>
				<Link href="/blog" passHref>
					<a>Posts</a>
				</Link>
			</BlogAppBarLeft>
			<BlogAppBarCenter>
				<Subheading>Ahmet&apos;s Blog</Subheading>
			</BlogAppBarCenter>
			<BlogAppBarRight></BlogAppBarRight>
		</BlogAppBarWrapper>
	);
};

export { BlogPostsAppBar, BlogPostAppBar };
