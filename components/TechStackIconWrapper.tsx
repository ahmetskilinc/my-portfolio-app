import React from "react";
import styles from "../styles/TechStackIconWrapper.module.scss";

const TechStackIconWrapper = (props: { children: React.ReactNode }) => {
	const { children } = props;
	return <div className={styles.iconWrapper}>{children}</div>;
};

export default TechStackIconWrapper;
