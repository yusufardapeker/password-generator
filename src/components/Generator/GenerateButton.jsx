import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { generatePassword } from "../../redux/generatorSlice";

function GenerateButton() {
	const { charLength, toGenerateLetters } = useSelector((store) => store.generator);
	const dispatch = useDispatch();

	const generate = () => {
		const convertedStringOfLettersArray = toGenerateLetters.toString().replaceAll(",", "");

		if (toGenerateLetters.length > 0) {
			let newPassword = "";
			for (let i = 0; i < charLength; i++) {
				const randomNumber = Math.floor(Math.random() * convertedStringOfLettersArray.length);
				newPassword += convertedStringOfLettersArray[randomNumber];
			}

			dispatch(generatePassword(newPassword));
		}
	};

	return (
		<div className="generate" onClick={generate}>
			<button className="btn">Generate</button>
			<FaArrowRight className="arrow-icon" />
		</div>
	);
}

export default GenerateButton;
