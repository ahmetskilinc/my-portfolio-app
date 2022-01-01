import styled from "styled-components";

const PhotographyWrapper = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	display: grid;
	grid-gap: 6px;
	grid-template-columns: 1fr 1fr 1fr 1fr;

	@media only screen and (max-width: 1200px) {
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media only screen and (max-width: 960px) {
		grid-template-columns: 1fr 1fr;
	}

	@media only screen and (max-width: 520px) {
		grid-template-columns: 1fr;
	}
`;

const CustomImg = styled.img`
	height: 320px;
	width: 100%;
	object-fit: cover;

	&:hover {
		object-fit: contain;
	}

	@media only screen and (max-width: 960px) {
		height: 420px;
	}
`;

const Photo = (props: { img: string }) => <CustomImg src={`./images/photographs/${props.img}.jpeg`} alt={props.img} />;

const PhotographyGrid = () => {
	return (
		<PhotographyWrapper>
			<Photo img="a3-car" />
			<Photo img="waterfall-virginia-water" />
			<Photo img="tate-britain" />
			<Photo img="clapham" />
			<Photo img="city" />
			<Photo img="southbank-spraypaint" />
			<Photo img="vauxhall-day" />
			<Photo img="vauxhall-night" />
			<Photo img="mi5" />
			<Photo img="tate-city" />
			<Photo img="namco-arcade" />
			<Photo img="clapham-rain" />
		</PhotographyWrapper>
	);
};

export default PhotographyGrid;
