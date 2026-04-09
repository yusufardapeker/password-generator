import { useSelector, useDispatch } from "react-redux";
import { setCharRules } from "../../redux/generatorSlice";

function CharRules() {
	const { toGenerateChars, ruleInputs } = useSelector((state) => state.generator);
	const dispatch = useDispatch();

	return (
		<div className="char-rules">
			{ruleInputs.map((ruleInput) => (
				<div className="rule-inputs" key={ruleInput.rule}>
					<input
						id={ruleInput.rule}
						type="checkbox"
						className="rule-input"
						checked={toGenerateChars.includes(ruleInput.rule)}
						onChange={() => dispatch(setCharRules(ruleInput.rule))}
					/>
					<label htmlFor={ruleInput.rule} className="rule-input-label">
						{ruleInput.text}
					</label>
				</div>
			))}
		</div>
	);
}

export default CharRules;
