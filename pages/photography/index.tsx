import dynamic from "next/dynamic";

const PhotographyGrid = dynamic(() => import("../../components/PhotographyGrid"));
const PhotographyLayout = dynamic(() => import("../../layouts/PhotographyLayout"));

const Photography = () => {
	return (
		<PhotographyLayout>
			<PhotographyGrid />
		</PhotographyLayout>
	);
};

export default Photography;
