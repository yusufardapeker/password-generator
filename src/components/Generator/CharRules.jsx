import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToGenerateLetters } from "../../redux/generatorSlice";

const inputTexts = [
	"Include Uppercase Letters",
	"Include Lowercase Letters",
	"Include Numbers",
	"Include Symbols",
];

function CharRules() {
	const { toGenerateLetters } = useSelector((store) => store.generator);
	const dispatch = useDispatch();

	const letterRules = [
		{
			Lowercase: "abcdefghijklmnopqrstuvwxyz",
		},

		{
			Uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		},

		{
			Numbers: "123456789",
		},

		{
			Symbols: "#$+%&?*",
		},
	];

	const handleCharRules = (e) => {
		const clickedElement = e.target;
		const isClickedElementChecked = clickedElement.checked;
		const clickedElementText = clickedElement.parentNode.childNodes[1].textContent.split(" ")[1];

		if (isClickedElementChecked) {
			letterRules.forEach((rule) => {
				if (Object.keys(rule)[0] === clickedElementText) {
					dispatch(setToGenerateLetters([...toGenerateLetters, `${Object.values(rule)}`]));
				}
			});
		} else {
			letterRules.forEach((rule) => {
				if (Object.keys(rule)[0] === clickedElementText) {
					const filteredArray = toGenerateLetters.filter(
						(letter) => letter !== Object.values(rule).toString()
					);

					dispatch(setToGenerateLetters(filteredArray));
				}
			});
		}
	};

	return (
		<div className="char-rules">
			{inputTexts.map((text, index) => (
				<div className="inputs-wrapper" key={index}>
					<input
						id={`checkbox-${index}`}
						type="checkbox"
						className="checkbox-input"
						onClick={(e) => handleCharRules(e)}
					/>
					<label htmlFor={`checkbox-${index}`} className="checkbox-text">
						{text}
					</label>
				</div>
			))}
		</div>
	);
}

export default CharRules;
