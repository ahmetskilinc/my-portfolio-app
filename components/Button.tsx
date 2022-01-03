import styles from "../styles/Button.module.scss";

const Button = (props: { children: React.ReactNode; href: string }) => {
	return (
		<a href={props.href} className={styles.button}>
			<div>{props.children}</div>
		</a>
	);
};

export default Button;
