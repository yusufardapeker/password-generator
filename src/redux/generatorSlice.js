import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	charLength: 10,
	toGenerateLetters: [],
	generatedPassword: "",
};

export const generatorSlice = createSlice({
	name: "generator",
	initialState,
	reducers: {
		changeCharLength: (state, action) => {
			state.charLength = action.payload;
		},

		setToGenerateLetters: (state, action) => {
			state.toGenerateLetters = action.payload;
		},

		generatePassword: (state, action) => {
			state.generatedPassword = action.payload;
		},
	},
});

export const { changeCharLength, setToGenerateLetters, generatePassword } = generatorSlice.actions;

export default generatorSlice.reducer;
