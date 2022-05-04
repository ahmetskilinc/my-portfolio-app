import { GetServerSideProps } from "next";
import { PhotographyGrid } from "../../components";
import { PhotographyLayout } from "../../layouts";

const Photography = ({ photography }: { photography: any[] }) => {
	return (
		<PhotographyLayout>
			<PhotographyGrid photography={photography} />
		</PhotographyLayout>
	);
};

export default Photography;

export const getServerSideProps: GetServerSideProps = async () => {
	const photography = await (await fetch(`${process.env.NEXT_PUBLIC_LINK}photography`)).json();

	return {
		props: {
			photography,
		},
	};
};
