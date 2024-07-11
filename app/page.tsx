"use client";
import chillHop from "@/data";
import Player from "./components/Player";
import Song from "./components/Song";
import { RefObject, useState } from "react";
import Library from "./components/Library";
import Navbar from "./components/Navbar";
const Home = () => {
	const [songs, setSongs] = useState(chillHop());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [songRef, setSongRef] = useState<RefObject<HTMLAudioElement>>();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<Navbar setIsOpen={setIsOpen} />
			<Song currentSong={currentSong} />
			<Player
				currentSong={currentSong}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				setSongRef={setSongRef}
				songs={songs}
				setCurrentSong={setCurrentSong}
				setSongs={setSongs}
			/>
			<Library
				songs={songs}
				setCurrentSong={setCurrentSong}
				songRef={songRef}
				setIsPlaying={setIsPlaying}
				setSongs={setSongs}
				isOpen={isOpen}
			/>
		</div>
	);
};
export default Home;
