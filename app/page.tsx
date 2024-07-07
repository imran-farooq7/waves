"use client";
import chillHop from "@/data";
import Player from "./components/Player";
import Song from "./components/Song";
import { useState } from "react";

const Home = () => {
	const [songs, setSongs] = useState(chillHop());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	return (
		<div>
			<Song currentSong={currentSong} />
			<Player />
		</div>
	);
};
export default Home;
