"use client";
import chillHop from "@/data";
import Player from "./components/Player";
import Song from "./components/Song";
import { useState } from "react";
const Home = () => {
	const [songs, setSongs] = useState(chillHop());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	return (
		<div>
			<Song currentSong={currentSong} />
			<Player
				currentSong={currentSong}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
			/>
		</div>
	);
};
export default Home;
