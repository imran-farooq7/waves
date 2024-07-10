import { Dispatch, SetStateAction } from "react";
import { FaMusic } from "react-icons/fa6";
interface Props {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Navbar = ({ setIsOpen }: Props) => {
	return (
		<nav>
			<h2>Next Song</h2>
			<button onClick={() => setIsOpen((prev) => !prev)}>
				Library
				<FaMusic />
			</button>
		</nav>
	);
};
export default Navbar;
