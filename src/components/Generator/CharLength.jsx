import { useDispatch, useSelector } from "react-redux";
import { setCharLength } from "../../redux/generatorSlice";
import { useEffect } from "react";

function CharLength() {
	const { charLength } = useSelector((state) => state.generator);
	const dispatch = useDispatch();

	useEffect(() => {
		document.documentElement.style.setProperty("--track-width", `${charLength * 5}%`);
	}, [charLength]);

	return (
		<div className="char-length">
			<div className="char-length-info">
				<p className="char-length-text">Character Length</p>
				<p className="char-lenght-count">{charLength}</p>
			</div>

			<input
				className="char-length-input"
				type="range"
				value={charLength}
				step="1"
				min="1"
				max="20"
				onChange={(e) => dispatch(setCharLength(e.target.value))}
			/>
		</div>
	);
}

export default CharLength;
