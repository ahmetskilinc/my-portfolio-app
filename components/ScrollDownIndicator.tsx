import styles from "../styles/ScrollDownIndicator.module.scss";

const ScrollDownIndicator = () => {
	return (
		<svg className={styles.mousedown} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 98">
			<g fill="none" fillRule="evenodd" stroke="#EEE" strokeWidth="4">
				<path d="M2 22l.003-.344C2.187 10.769 11.069 2 22 2c11.046 0 20 8.954 20 20h0v26c0 11.046-8.954 20-20 20S2 59.046 2 48h0V22z" />
				<path strokeLinecap="round" strokeLinejoin="round" d="M6 80l16.229 15.692L38.512 80" />
				<path strokeLinecap="round" d="M22.5 20v6" />
			</g>
		</svg>
	);
};

export default ScrollDownIndicator;
