import styles from "../styles/PhotographyGrid.module.scss";
import Photography from "../data/photography.json";
import Image from "next/image";

const PhotographyGrid = () => {
	return (
		<div className={styles.photographyWrapper}>
			{Photography.map(({ img }) => {
				return (
					<Image
						key={img}
						src={require(`../public/images/photographs/${img}.jpeg`)}
						alt={img}
						height="320px"
						width="100%"
						placeholder="blur"
						quality={90}
					/>
				);
			})}
		</div>
	);
};

export default PhotographyGrid;
