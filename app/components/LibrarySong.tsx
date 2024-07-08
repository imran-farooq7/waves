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
}
const LibrarySong = ({ song }: Props) => {
	return (
		<div className="library-song">
			<img src={song.cover} alt={song.name} />
			<div>
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};
export default LibrarySong;
