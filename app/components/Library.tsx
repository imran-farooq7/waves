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
}

const Library = ({ songs }: Props) => {
	return (
		<div className="library">
			<h2>Library</h2>
			<div className="library-songs">
				{songs.map((song) => (
					<LibrarySong song={song} />
				))}
			</div>
		</div>
	);
};
export default Library;
