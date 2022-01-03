import styles from "../styles/SectionWrapper.module.scss";

const SectionWrapper = (props: { children: React.ReactNode }) => {
	return <section className={styles.sectionWrapper}>{props.children}</section>;
};

export default SectionWrapper;
