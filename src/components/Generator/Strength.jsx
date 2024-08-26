import React from "react";

const levels = ["Weak", "Easy", "Medium", "Hard"];

function Strength() {
	return (
		<div className="strength">
			<p className="text">Strength</p>

			<div className="difficulty">
				<p className="strength-word"></p>
				<div className="levels">
					{levels.map((level, index) => (
						<span className="level" key={index}></span>
					))}
				</div>
			</div>
		</div>
	);
}

export default Strength;
