import ReactMarkdown from "react-markdown";
import posts from "../../data/posts.json";
import BlogLayout from "../../layouts/BlogLayout";

interface Post {
	id: string;
	title: string;
	content: string;
}

export const getStaticPaths = async () => {
	const paths = posts.map((post: Post) => ({
		params: {
			slug: post.id,
		},
	}));

	return { paths, fallback: false };
};

export const getStaticProps = async (props: { params: any }) => {
	const { params } = props;
	const post = posts.find((p) => p.id === params.slug);

	return { props: { post } };
};

const BlogPost = (props: { post: Post }) => {
	const { post } = props;
	return (
		<BlogLayout>
			<ReactMarkdown>{post.content}</ReactMarkdown>
		</BlogLayout>
	);
};

export default BlogPost;
