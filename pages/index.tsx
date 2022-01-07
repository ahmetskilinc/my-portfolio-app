import type { NextPage } from "next";
import dynamic from "next/dynamic";

const MainLayout = dynamic(() => import("../layouts/MainLayout"));
const ContactMe = dynamic(() => import("../components/ContactMe"));
const Hero = dynamic(() => import("../components/Hero"));
const MyWork = dynamic(() => import("../components/MyWork"));
const ScrollDownIndicator = dynamic(() => import("../components/ScrollDownIndicator"));
const Life = dynamic(() => import("../components/Life"));

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
