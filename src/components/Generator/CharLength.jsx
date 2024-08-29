import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCharLength } from "../../redux/generatorSlice";

function CharLength() {
	const { charLength } = useSelector((store) => store.generator);
	const dispatch = useDispatch();

	const inputChange = (e) => {
		const inputValue = e.target.value;
		dispatch(changeCharLength(inputValue));
		document.documentElement.style.setProperty("--track-width", `${inputValue * 5}%`);
	};

	return (
		<div className="char-length">
			<div className="char-length-info">
				<p className="text">Character Length</p>
				<span className="count">{charLength}</span>
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
