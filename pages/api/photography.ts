import { NextApiRequest, NextApiResponse } from "next";

const PhotographyApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const photography = [
		{
			img: "a3-car",
		},
		{
			img: "waterfall-virginia-water",
		},
		{
			img: "tate-britain",
		},
		{
			img: "clapham",
		},
		{
			img: "city",
		},
		{
			img: "southbank-spraypaint",
		},
		{
			img: "vauxhall-day",
		},
		{
			img: "vauxhall-night",
		},
		{
			img: "mi5",
		},
		{
			img: "tate-city",
		},
		{
			img: "namco-arcade",
		},
		{
			img: "clapham-rain",
		},
	];
	return res.status(200).json(photography);
};

export default PhotographyApi;
