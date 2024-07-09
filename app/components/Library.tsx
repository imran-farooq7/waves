import { Dispatch, SetStateAction } from "react";
import LibrarySong from "./LibrarySong";
interface Props {
	songs: {
		name: string;
		cover: string;
		artist: string;
		audio: string;
		color: string[];
		id: string;
		active: boolean;
	}[];
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
}

const Library = ({ songs, setCurrentSong }: Props) => {
	return (
		<div className="library">
			<h2>Library</h2>
			<div className="library-songs">
				{songs.map((song) => (
					<LibrarySong
						song={song}
						setCurrentSong={setCurrentSong}
						songs={songs}
					/>
				))}
			</div>
		</div>
	);
};
export default Library;
