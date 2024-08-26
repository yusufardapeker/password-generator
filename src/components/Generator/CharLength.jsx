import React from "react";

function CharLength() {
	const inputChange = (e) => {
		const inputValue = e.target.value;
		document.documentElement.style.setProperty("--track-width", `${inputValue * 5}%`);
	};

	return (
		<div className="char-length">
			<div className="char-length-info">
				<p className="text">Character Length</p>
				<span className="count">10</span>
			</div>

			<input
				className="char-length-input"
				type="range"
				defaultValue={10}
				step="1"
				min="1"
				max="20"
				onChange={(e) => inputChange(e)}
			/>
		</div>
	);
}

export default CharLength;
