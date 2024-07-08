"use client";
import chillHop from "@/data";
import Player from "./components/Player";
import Song from "./components/Song";
import { useState } from "react";
import Library from "./components/Library";
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
			<Library songs={songs} />
		</div>
	);
};
export default Home;
