import React from "react";
import { FaArrowRight } from "react-icons/fa";

function GenerateButton() {
	return (
		<div className="generate">
			<button className="btn">Generate</button>
			<FaArrowRight className="arrow-icon" />
		</div>
	);
}

export default GenerateButton;
