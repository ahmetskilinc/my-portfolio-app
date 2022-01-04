import styles from "../styles/PhotographyGrid.module.scss";
import Photography from "../data/photography.json";
import Image from "next/image";

const PhotographyGrid = () => {
	return (
		<div className={styles.photographyWrapper}>
			{Photography.map(({ img }) => (
				<Image key={img} src={`/images/photographs/${img}.jpeg`} alt={img} height="320px" width="100%" />
			))}
		</div>
	);
};

export default PhotographyGrid;
