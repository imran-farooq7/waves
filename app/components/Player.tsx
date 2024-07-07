"use client";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight, FaPlay } from "react-icons/fa6";
interface Props {
	currentSong: {
		name: string;
		cover: string;
		artist: string;
		audio: string;
		color: string[];
		id: string;
		active: boolean;
	};
}

const Player = ({ currentSong }: Props) => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const playSongHandler = () => {
		console.log(audioRef.current?.play());
	};
	return (
		<div className="player">
			<div className="time-control">
				<p>Start Time</p>
				<input type="range" />
				<p>End Time</p>
			</div>
			<div className="player-control">
				<FaAngleLeft size={"32"} />
				<FaPlay size={"32"} onClick={playSongHandler} />
				<FaAngleRight size={"32"} />
			</div>
			<audio src={currentSong.audio} ref={audioRef}></audio>
		</div>
	);
};
export default Player;
