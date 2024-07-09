import { Dispatch, RefObject, SetStateAction } from "react";

interface Props {
	song: {
		name: string;
		cover: string;
		artist: string;
		audio: string;
		color: string[];
		id: string;
		active: boolean;
	};
	setCurrentSong: Dispatch<
		SetStateAction<{
			name: string;
			cover: string;
			artist: string;
			audio: string;
			color: string[];
			id: string;
			active: boolean;
		}>
	>;
	songs: {
		name: string;
		cover: string;
		artist: string;
		audio: string;
		color: string[];
		id: string;
		active: boolean;
	}[];
	songRef: RefObject<HTMLAudioElement> | undefined;
	setIsPlaying: Dispatch<SetStateAction<boolean>>;
}
const LibrarySong = ({
	song,
	setCurrentSong,
	songs,
	songRef,
	setIsPlaying,
}: Props) => {
	const handleSelectedSong = (id: string) => {
		const selectedSong = songs.filter((s) => s.id === id);
		setCurrentSong({ ...selectedSong[0] });
		const playPromise = songRef?.current?.play();
		if (playPromise !== undefined) {
			playPromise.then((audio) => {
				songRef?.current?.play();
				setIsPlaying(true);
			});
		}
	};
	return (
		<div className="library-song" onClick={() => handleSelectedSong(song.id)}>
			<img src={song.cover} alt={song.name} />
			<div>
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};
export default LibrarySong;
