import type { GetServerSideProps } from "next";
import { ContactMe, Hero, Life, MyWork, ScrollDownIndicator } from "../components";
import { MainLayout } from "../layouts";
import type { dataType } from "../types/data";

const Home = ({ work }: { work: dataType[] }) => {
	return (
		<MainLayout>
			<ScrollDownIndicator />
			<Hero />
			<MyWork work={work} />
			<Life />
			<ContactMe />
		</MainLayout>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
	const work = await (await fetch(`${process.env.NEXT_PUBLIC_LINK}home`)).json();

	return {
		props: {
			work,
		},
	};
};
