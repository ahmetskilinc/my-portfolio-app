import { Footer, Slider } from "../components";

const MainLayout = (props: { children: React.ReactNode }) => {
	return (
		<>
			<Slider />
			<div>
				{props.children}
				<Footer />
			</div>
		</>
	);
};

export default MainLayout;
