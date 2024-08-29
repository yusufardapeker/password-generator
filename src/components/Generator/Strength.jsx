import React from "react";
import { useSelector } from "react-redux";

const levels = ["Weak", "Easy", "Medium", "Hard"];

function Strength() {
	const { generatedPassword } = useSelector((store) => store.generator);

	let strengthWord = "";

	const setStrengthWord = () => {
		if (generatedPassword.length >= 1 && generatedPassword.length < 5) {
			strengthWord = "Weak";
		} else if (generatedPassword.length >= 5 && generatedPassword.length < 10) {
			strengthWord = "Easy";
		} else if (generatedPassword.length >= 10 && generatedPassword.length < 15) {
			strengthWord = "Medium";
		} else if (generatedPassword.length >= 15 && generatedPassword.length <= 20) {
			strengthWord = "Hard";
		}
	};

	setStrengthWord();

	return (
		<div className="strength">
			<p className="text">Strength</p>

			<div className="difficulty">
				<p className="strength-word">{strengthWord}</p>
				<div className="levels">
					{levels.map((level, index) => (
						<span className={`level ${strengthWord}`} key={index}></span>
					))}
				</div>
			</div>
		</div>
	);
}

export default Strength;
