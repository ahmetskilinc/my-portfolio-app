import styled from "styled-components";

const Button = styled.a`
	display: inline-block;
	background-color: rgb(132, 51, 179);
	padding: 12px 34px;
	border-radius: 100px;
	margin-right: 12px;
	text-decoration: none;

	&:hover {
		color: #ffffff;
		background-color: rgb(76, 27, 104);
	}
	> div {
		color: #ffffff;
		display: flex;
		align-items: center;
		> svg {
			margin-left: 8px;
			height: 16px;
			> path {
				fill: #ffffff;
			}
		}
	}

	&::first-child {
		margin: 0;
	}
`;

export default Button;
