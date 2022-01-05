import styles from "../styles/PhotographyGrid.module.scss";
import Photography from "../data/photography.json";
import Image from "next/image";

const PhotographyGrid = () => {
	return (
		<div className={styles.photographyWrapper}>
			{Photography.map(({ img }) => (
				<Image key={img} src={require(`../public/images/photographs/${img}.jpeg`)} alt={img} height="600" width="600" placeholder="blur" quality={99} />
			))}
		</div>
	);
};

export default PhotographyGrid;
