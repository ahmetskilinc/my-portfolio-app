import styles from "../styles/FullScreenImage.module.scss";
import { CloseIcon } from "./icons";

const FullScreenImage = (props: { handleOpen: Function; img: string }) => {
	const { handleOpen, img } = props;
	return (
		<>
			<button className={styles.closeButton} onClick={() => handleOpen()}>
				<CloseIcon />
			</button>
			<img className={styles.fullImage} src={`/images/photographs/${img}.jpeg`} alt={img} />
		</>
	);
};

export default FullScreenImage;
