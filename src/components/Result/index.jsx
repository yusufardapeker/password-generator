import React from "react";
import "../../styles/style.scss";

import { FaRegCopy } from "react-icons/fa6";
import { useSelector } from "react-redux";

function index() {
	const { generatedPassword } = useSelector((store) => store.generator);

	const copyPassword = () => {
		navigator.clipboard.writeText(generatedPassword);
	};

	return (
		<div className="result">
			<p className="placeholder-text">{generatedPassword ? `${generatedPassword}` : "P4$5W0rD"}</p>
			<FaRegCopy className="copy-icon" onClick={copyPassword} />
		</div>
	);
}

export default index;
