import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { animation } from "../lib/settings";
import styles from "../styles/Footer.module.scss";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const FooterIconLink = (props: { link: string; label: string; children: React.ReactNode }) => {
	const { link, label, children } = props;
	let icon = useRef(null) as any;

	useEffect(() => {
		if (window.location.pathname === "/") {
			gsap.from(icon, {
				...animation,
				scrollTrigger: {
					trigger: icon,
				},
			});
		}
	}, [icon]);

	return (
		<a
			className={styles.iconLinkContainer}
			ref={(e) => {
				icon = e;
			}}
			target="_blank"
			href={link}
			rel="noreferrer"
			aria-label={label}
		>
			{children}
		</a>
	);
};

const Footer = () => {
	let copyrightText = useRef(null) as any;
	let otherLinks = useRef(null) as any;

	useEffect(() => {
		if (window.location.pathname === "/") {
			gsap.from(copyrightText, {
				...animation,
				scrollTrigger: {
					trigger: copyrightText,
				},
			});

			gsap.from(otherLinks, {
				...animation,
				scrollTrigger: {
					trigger: otherLinks,
				},
			});
		}
	}, [copyrightText, otherLinks]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.iconsWrapper}>
				<FooterIconLink link="https://github.com/ahmetskilinc" label="Github">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 23.4">
						<path
							fill="#fefefe"
							d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.8-.3-5.6-1.3-5.6-5.9 0-1.3.5-2.4 1.2-3.2-.1-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4C17.3 4.7 18.3 5 18.3 5c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12c0-6.6-5.4-12-12-12"
						/>
					</svg>
				</FooterIconLink>
				<FooterIconLink link="https://instagram.com/ahmetskilinc" label="Instagram">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							fill="#fefefe"
							fillRule="nonzero"
							d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63a5.876 5.876 0 00-2.126 1.384A5.855 5.855 0 00.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85 0 3.204-.015 3.585-.074 4.85-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z"
						/>
					</svg>
				</FooterIconLink>
				<FooterIconLink link="https://linkedin.com/in/ahmetskilinc" label="LinkedIn">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382 382">
						<path
							fill="#fefefe"
							fillRule="nonzero"
							d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0zM118.207 329.844c0 5.554-4.502 10.056-10.056 10.056H65.345c-5.554 0-10.056-4.502-10.056-10.056V150.403c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056v179.441zM86.748 123.432c-22.459 0-40.666-18.207-40.666-40.666 0-22.459 18.207-40.666 40.666-40.666 22.459 0 40.666 18.207 40.666 40.666 0 22.459-18.206 40.666-40.666 40.666zM341.91 330.654a9.247 9.247 0 01-9.246 9.246H286.73a9.247 9.247 0 01-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079a9.246 9.246 0 01-9.246 9.246h-44.426a9.247 9.247 0 01-9.246-9.246V149.593a9.247 9.247 0 019.246-9.246h44.426a9.247 9.247 0 019.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.472v86.846z"
						/>
					</svg>
				</FooterIconLink>
				<FooterIconLink link="https://codepen.io/ahmetskilinc" label="Codepen">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
						<path
							fill="#fefefe"
							fillRule="nonzero"
							d="M16.878.415a2.501 2.501 0 00-2.809.034L1.485 9.214a2.5 2.5 0 00-1.071 2.052v9.444c0 .84.421 1.623 1.122 2.086l12.79 8.455a2.5 2.5 0 002.758 0l13.044-8.618a2.501 2.501 0 001.122-2.086v-9.279a2.5 2.5 0 00-1.121-2.085L16.878.415zm9.743 10.23L21.8 13.882l-4.521-3.288-.029-6.467 9.371 6.518zM13.979 4.133v6.329l-4.633 3.24-4.621-3.099 9.254-6.47zM3.458 13.722l2.991 2.004-2.991 2.093v-4.097zm10.6 13.493l-9.331-6.258 4.661-3.258 4.67 3.133v6.383zm-1.772-11.541l3.021-2.113 3.519 2.313-3.119 2.095-3.421-2.295zm5.068 11.541V20.83l4.463-2.991 4.805 3.159-9.268 6.217zm10.6-9.288l-3.168-2.082 3.168-2.125v4.207z"
						/>
					</svg>
				</FooterIconLink>
			</div>
			<div
				ref={(e) => {
					otherLinks = e;
				}}
				className={styles.otherLinks}
			>
				<Link href="/photography" passHref>
					<a>/photography</a>
				</Link>
				<Link href="/tech-stack" passHref>
					<a>/tech-stack</a>
				</Link>
			</div>
			<p
				ref={(e) => {
					copyrightText = e;
				}}
			>
				developed by Ahmet.
			</p>
		</div>
	);
};

export default Footer;
