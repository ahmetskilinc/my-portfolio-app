import dynamic from "next/dynamic";

const MainLayout = dynamic(() => import("../layouts/MainLayout"));

const Tech = () => {
	return (
		<MainLayout>
			<p>This is my stack</p>
		</MainLayout>
	);
};

export default Tech;
