import { useDispatch, useSelector } from "react-redux";
import { calculateStrength, generatePassword } from "../../redux/generatorSlice";
import clsx from "clsx";

function GenerateButton() {
	const { hasRuleSelectingError } = useSelector((state) => state.generator);
	const dispatch = useDispatch();

	const handleGeneration = () => {
		dispatch(generatePassword());
		dispatch(calculateStrength());
	};

	return (
		<div className="generate">
			<button
				className={clsx("generate-button", { disabled: hasRuleSelectingError })}
				onClick={handleGeneration}
			>
				Generate
			</button>

			<p className="warning-message">Please select at least one character set</p>
		</div>
	);
}

export default GenerateButton;
