import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToGenerateLetters } from "../../redux/generatorSlice";

function CharRules() {
	const { toGenerateLetters } = useSelector((store) => store.generator);
	const dispatch = useDispatch();

	const ruleInputs = [
		{
			text: "Include Uppercase Letters",
			rule: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		},

		{
			text: "Include Lowercase Letters",
			rule: "abcdefghijklmnopqrstuvwxyz",
		},

		{
			text: "Include Numbers",
			rule: "123456789",
		},

		{
			text: "Include Symbols",
			rule: "#$+%&?*",
		},
	];

	const handleCharRules = (e) => {
		const clickedElement = e.target;
		const isClickedElementChecked = clickedElement.checked;
		const clickedElementText = clickedElement.parentNode.childNodes[1].textContent;

		if (isClickedElementChecked) {
			ruleInputs.forEach((input) => {
				if (input.text === clickedElementText) {
					dispatch(setToGenerateLetters([...toGenerateLetters, input.rule]));
				}
			});
		} else {
			ruleInputs.forEach((input) => {
				if (input.text === clickedElementText) {
					const filteredArray = toGenerateLetters.filter((letter) => letter !== input.rule);
					dispatch(setToGenerateLetters(filteredArray));
				}
			});
		}
	};

	return (
		<div className="char-rules">
			{ruleInputs.map((input, index) => (
				<div className="inputs-wrapper" key={index}>
					<input
						id={`checkbox-${index}`}
						type="checkbox"
						className="checkbox-input"
						onClick={(e) => handleCharRules(e)}
					/>
					<label htmlFor={`checkbox-${index}`} className="checkbox-text">
						{input.text}
					</label>
				</div>
			))}
		</div>
	);
}

export default CharRules;
