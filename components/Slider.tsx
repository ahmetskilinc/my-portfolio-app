import styled from "styled-components";

const StyledWrapper = styled.div`
	position: fixed;
	height: 100vh;
	width: 100vw;
	background-color: #202020;
	z-index: 4;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	animation: loader-slide-out 0.6s 0.4s cubic-bezier(1, 0, 0, 1) forwards;

	> svg {
		height: 120px;
	}

	@keyframes loader-slide-out {
		0% {
			transform: translateX(0);
			opacity: 1;
		}

		99% {
			transform: translateX(99vw);
			opacity: 0.99;
		}

		100% {
			transform: translateX(100vw);
			display: 0;
		}
	}
`;

const Slider = () => {
	return (
		<StyledWrapper>
			<svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.09 91.8">
				<g>
					<path fill="#fefefe" d="M98.09 91.8H75.75L30.76 0H53.1l44.99 91.8z" className="logo_line" />
					<circle cx="13.8" cy="78" r="13.8" fill="#fefefe" className="logo_circle" />
				</g>
			</svg>
		</StyledWrapper>
	);
};

export default Slider;
