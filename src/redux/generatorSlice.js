import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	charLength: 10,
	toGenerateChars: [],
	generatedPassword: "",
	passwordStrength: {
		label: "",
		level: 0,
	},
	ruleInputs: [
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
			rule: "0123456789",
		},

		{
			text: "Include Symbols",
			rule: "#$+%&?*",
		},
	],

	hasRuleSelectingError: false,
};

export const generatorSlice = createSlice({
	name: "generator",
	initialState,
	reducers: {
		setCharLength: (state, action) => {
			state.charLength = action.payload;
		},

		setCharRules: (state, action) => {
			const selectedCharRule = action.payload;

			if (state.toGenerateChars.includes(selectedCharRule)) {
				state.toGenerateChars = state.toGenerateChars.filter((char) => char !== selectedCharRule);
			} else {
				state.toGenerateChars = [...state.toGenerateChars, selectedCharRule];
			}

			if (state.toGenerateChars.length > 0) {
				state.hasRuleSelectingError = false;
			} else {
				state.hasRuleSelectingError = true;
			}
		},

		generatePassword: (state) => {
			if (state.toGenerateChars.length > 0) {
				const selectedChars = state.toGenerateChars.join("");
				let newPassword = "";

				for (let i = 0; i < state.charLength; i++) {
					const randomIndex = Math.floor(Math.random() * selectedChars.length);
					newPassword += selectedChars[randomIndex];
				}

				state.generatedPassword = newPassword;
			}
		},

		calculateStrength: (state) => {
			const selectedRulesCount = state.toGenerateChars.length;

			if (state.toGenerateChars.length <= 0) {
				state.passwordStrength.label = "";
				state.passwordStrength.level = 0;
				state.hasRuleSelectingError = true;
			} else if (state.charLength < 8 || selectedRulesCount <= 1) {
				state.passwordStrength.label = "Easy";
				state.passwordStrength.level = 1;
			} else if (state.charLength < 11 || selectedRulesCount === 2) {
				state.passwordStrength.label = "Weak";
				state.passwordStrength.level = 2;
			} else if (state.charLength < 15 || selectedRulesCount === 3) {
				state.passwordStrength.label = "Medium";
				state.passwordStrength.level = 3;
			} else {
				state.passwordStrength.label = "Hard";
				state.passwordStrength.level = 4;
			}
		},
	},
});

export const { setCharLength, setCharRules, generatePassword, calculateStrength } = generatorSlice.actions;

export default generatorSlice.reducer;
