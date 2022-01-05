import dynamic from "next/dynamic";
import styles from "../styles/Slider.module.scss";

const MyLogo = dynamic(() => import("./icons/MyLogo"));

const Slider = () => {
	return (
		<div className={styles.wrapper}>
			<MyLogo />
		</div>
	);
};

export default Slider;
