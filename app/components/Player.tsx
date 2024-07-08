"use client";
import {
	Dispatch,
	SetStateAction,
	SyntheticEvent,
	useRef,
	useState,
} from "react";
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
	const [songInfo, setSongInfo] = useState<{
		currentTime: number | null;
		duration: number | null;
	}>({ currentTime: null, duration: null });
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
	const handleSongTimeUpdate = (e: SyntheticEvent<HTMLAudioElement, Event>) => {
		const currentTime = e.currentTarget.currentTime;
		const duration = e.currentTarget.duration;
		setSongInfo({ ...songInfo, currentTime, duration });
	};
	const getTime = (time: number) => {
		return (
			Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
		);
	};
	return (
		<div className="player">
			<div className="time-control">
				<p>{getTime(songInfo.currentTime!)}</p>
				<input type="range" />
				<p>{getTime(songInfo.duration!)}</p>
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
			<audio
				onTimeUpdate={handleSongTimeUpdate}
				onLoadedMetadata={handleSongTimeUpdate}
				src={currentSong.audio}
				ref={audioRef}
			></audio>
		</div>
	);
};
export default Player;
