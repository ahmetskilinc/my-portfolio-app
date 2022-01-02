import { Footer, Slider } from "../components";

const MainLayout = (props: { children: React.ReactNode }) => {
	return (
		<>
			<Slider />
			{props.children}
			<Footer />
		</>
	);
};

export default MainLayout;
