import { FaRegCopy } from "react-icons/fa6";
import { useSelector } from "react-redux";

function index() {
	const { generatedPassword } = useSelector((store) => store.generator);

	const copyPassword = () => {
		navigator.clipboard.writeText(generatedPassword);
	};

	return (
		<div className="result">
			{generatedPassword ? (
				<p className="password">{generatedPassword}</p>
			) : (
				<p className="placeholder">P4$5W0rD</p>
			)}

			<button className="copy-button" onClick={copyPassword} aria-label="Copy password">
				<FaRegCopy className="copy-icon" />
			</button>
		</div>
	);
}

export default index;
