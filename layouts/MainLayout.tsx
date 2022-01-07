import styles from "../styles/MainLayout.module.scss";
import { Footer, Slider } from "../components";

const MainLayout = (props: { children: React.ReactNode }) => {
	return (
		<>
			<Slider />
			<div className={styles.wrapper}>
				{props.children}
				<Footer />
			</div>
		</>
	);
};

export default MainLayout;
