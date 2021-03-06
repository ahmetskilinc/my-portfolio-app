import { NextApiRequest, NextApiResponse } from "next";

const HomeApi = async (req: NextApiRequest, res: NextApiResponse) => {
	const work = [
		{
			image: "rescutrak",
			title: "RescuTrak",
			desc: "This was a project I built using React, Redux, Firebase and MaterialI-UI. I built it as my first big React project in order to learn React and Redux. It is a Vet/Rescue service patient tracking database.",
			demoUrl: "https://rescutrak.web.app/",
			sourceUrl: "https://github.com/ahmetskilinc/rescutrak/",
			complete: true,
		},
		{
			image: "ispecs",
			title: "iSpecs",
			desc: "A database to see the specifications of current and past Apple devices. Written in React, Redux, Firebase and Material-UI.",
			demoUrl: "https://ispecs.app/",
			sourceUrl: "https://github.com/ahmetskilinc/ispecs-web/",
			complete: true,
		},
		{
			image: "frello",
			title: "Frello",
			desc: "A simple Kanban board I created using react and some other Javascript libraries. It is still in progress.",
			complete: false,
		},
		{
			image: "markdownapp",
			title: "M⬇ Editor",
			desc: "A simple markdown editor that allows you to download your work as .md or .html files. It is still in progress.",
			complete: false,
		},
		{
			image: "calendar",
			title: "Calendar App",
			desc: "A simple calendar app to learn Firebase with vanilla Javascript. It uses Firebase Auth and Firebase Firestore in order to authenticate and serve the correct calendar to the user. It also uses FullCalendar.io",
			demoUrl: "https://calendar.ahmet.wtf/",
			sourceUrl: "https://github.com/ahmetskilinc/calendarfirebaseapp/",
			complete: true,
		},
		{
			image: "colours",
			title: "Colours",
			desc: "Simple Javascript app that gives you a random colour hex value and the name of the colour.",
			demoUrl: "https://colours.ahmetk.dev/",
			sourceUrl: "https://github.com/ahmetskilinc/colours/",
			complete: true,
		},
		{
			image: "covid19app",
			title: "Covid-19 Tracker",
			desc: "A Covid-19 tracker app made using React and Material-UI. I made this app to learn how to use API calls in React using the disease.sh API.",
			demoUrl: "https://covid19app-react.web.app/",
			sourceUrl: "https://github.com/ahmetskilinc/covid-tracker-react/",
			complete: true,
		},
	];
	return res.status(200).json(work);
};

export default HomeApi;
