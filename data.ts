import { v4 as uuidv4 } from "uuid";
function chillHop() {
	return [
		{
			name: "Beaver Creek",
			cover:
				"https://cms.chillhop.com/media/68370/squarel38731803e8cbc15c8d6c92ce7f3137c4b2489362.jpg",
			artist: "Aso, Middle School, Aviino",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: true,
		},
		{
			name: "Daylight",
			cover:
				"https://cms.chillhop.com/media/63842/squarel4a08568d9bf1df419e1baeac2d73e8dd6c517473.jpg",
			artist: "Aiguille",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Keep Going",
			cover:
				"https://cms.chillhop.com/media/12212/squarel7e98d3028a22ee7f16f6a9bfcdc2089f089777a5.jpg",
			artist: "Swørn",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Nightfall",
			cover:
				"https://cms.chillhop.com/media/12212/squarel7e98d3028a22ee7f16f6a9bfcdc2089f089777a5.jpg",
			artist: "Aiguille",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Reflection",
			cover:
				"https://cms.chillhop.com/media/63842/squarel4a08568d9bf1df419e1baeac2d73e8dd6c517473.jpg",
			artist: "Swørn",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Under the City Stars",
			cover:
				"https://cms.chillhop.com/media/34373/squareld8344de22563af8eaec8f544c14711592eabef26.jpg",
			artist: "Aso, Middle School, Aviino",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: false,
		},
		//ADD MORE HERE
	];
}

export default chillHop;
