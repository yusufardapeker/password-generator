import { configureStore } from "@reduxjs/toolkit";
import generatorSlice from "./generatorSlice";

export const store = configureStore({
	reducer: {
		generator: generatorSlice,
	},
});
