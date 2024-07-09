"use client";
import chillHop from "@/data";
import Player from "./components/Player";
import Song from "./components/Song";
import { RefObject, useState } from "react";
import Library from "./components/Library";
const Home = () => {
	const [songs, setSongs] = useState(chillHop());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [songRef, setSongRef] = useState<RefObject<HTMLAudioElement>>();
	console.log(songRef);
	return (
		<div>
			<Song currentSong={currentSong} />
			<Player
				currentSong={currentSong}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				setSongRef={setSongRef}
			/>
			<Library
				songs={songs}
				setCurrentSong={setCurrentSong}
				songRef={songRef}
				setIsPlaying={setIsPlaying}
			/>
		</div>
	);
};
export default Home;
