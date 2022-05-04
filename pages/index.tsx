import type { NextPage } from "next";
import { ContactMe, Hero, Life, MyWork, ScrollDownIndicator } from "../components";
import { MainLayout } from "../layouts";

const Home: NextPage = () => {
	return (
		<MainLayout>
			<ScrollDownIndicator />
			<Hero />
			<MyWork />
			<Life />
			<ContactMe />
		</MainLayout>
	);
};

export default Home;
