"use client";
import { Dispatch, SetStateAction, useRef } from "react";
import { FaAngleLeft, FaAngleRight, FaPause, FaPlay } from "react-icons/fa6";
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
	setIsPlaying: Dispatch<SetStateAction<boolean>>;
	isPlaying: boolean;
}

const Player = ({ currentSong, isPlaying, setIsPlaying }: Props) => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const playSongHandler = () => {
		if (isPlaying) {
			audioRef.current?.pause();
			setIsPlaying((prevState) => !prevState);
		} else {
			audioRef.current?.play();
			setIsPlaying((prevState) => !prevState);
		}
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
				{isPlaying ? (
					<FaPause size={"32"} onClick={playSongHandler} />
				) : (
					<FaPlay size={"32"} onClick={playSongHandler} />
				)}
				<FaAngleRight size={"32"} />
			</div>
			<audio src={currentSong.audio} ref={audioRef}></audio>
		</div>
	);
};
export default Player;
