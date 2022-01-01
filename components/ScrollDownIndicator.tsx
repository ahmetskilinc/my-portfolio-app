import styled from "styled-components";

const SvgWrapper = styled.svg`
	position: absolute;
	font-size: 30px;
	width: 26px;
	bottom: 20px;
	left: calc(50% - 13px);
	animation: bounce 1.4s ease infinite;
	transition: 0.4s all;
	opacity: 0;
	@media only screen and (max-width: 400px) {
		width: 18px;
		left: calc(50% - 9px);
	}

	@keyframes bounce {
		50% {
			transform: translateY(-50%);
			opacity: 1;
		}

		100% {
			transform: translateY(0);
			opacity: 0;
		}
	}
`;

const ScrollDownIndicator = () => {
	return (
		<SvgWrapper className="mousedown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 98">
			<g fill="none" fillRule="evenodd" stroke="#EEE" strokeWidth="4">
				<path d="M2 22l.003-.344C2.187 10.769 11.069 2 22 2c11.046 0 20 8.954 20 20h0v26c0 11.046-8.954 20-20 20S2 59.046 2 48h0V22z" />
				<path strokeLinecap="round" strokeLinejoin="round" d="M6 80l16.229 15.692L38.512 80" />
				<path strokeLinecap="round" d="M22.5 20v6" />
			</g>
		</SvgWrapper>
	);
};

export default ScrollDownIndicator;
