import { useSelector } from "react-redux";

function Strength() {
	const { label, level } = useSelector((state) => state.generator.passwordStrength);

	return (
		<div className="strength">
			<p className="component-label">Strength</p>

			<div className="difficulty">
				<p className="strength-word">{label}</p>
				<div className="levels">
					{[1, 2, 3, 4].map((levelBar) => (
						<span
							key={levelBar}
							className="level-bar"
							style={{
								backgroundColor: levelBar <= level && label ? "#4ccd99" : "transparent",
								borderColor: levelBar <= level && label ? "#4ccd99" : "#fff1db",
							}}
						></span>
					))}
				</div>
			</div>
		</div>
	);
}

export default Strength;
