import React from "react";

const inputTexts = [
	"Include Uppercase Letters",
	"Include Lowercase Letters",
	"Include Numbers",
	"Include Symbols",
];

function CharRules() {
	return (
		<div className="char-rules">
			{inputTexts.map((text, index) => (
				<div className="inputs-wrapper" key={index}>
					<input id={`checkbox-${index}`} type="checkbox" className="checkbox-input" />
					<label htmlFor={`checkbox-${index}`} className="checkbox-text">
						{text}
					</label>
				</div>
			))}
		</div>
	);
}

export default CharRules;
