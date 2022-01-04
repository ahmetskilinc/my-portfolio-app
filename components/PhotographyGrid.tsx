import styles from "../styles/PhotographyGrid.module.scss";
import Photography from "../data/photography.json";

const PhotographyGrid = () => {
	return (
		<div className={styles.photographyWrapper}>
			{Photography.map(({ img }) => (
				<picture key={img}>
					<source srcSet={`/images/photographs/${img}.webp`} type="image/webp" />
					<img src={`/images/photographs/${img}.jpeg`} alt={img} height="320px" width="100%" />
				</picture>
			))}
		</div>
	);
};

export default PhotographyGrid;
