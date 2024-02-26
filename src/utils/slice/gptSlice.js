import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
	name: "gpt",
	initialState: {
		showGPTSearchView: false,
		movieResults: null,
		movieNames: null,
	},
	reducers: {
		toggleSearchView: (state, action) => {
			state.showGPTSearchView = !state.showGPTSearchView;
		},
		addGptMovieResult: (state, action) => {
			const { movieNames, movieResults } = action.payload;
			state.movieNames = movieNames;
			state.movieResults = movieResults;
		},
	},
});

export const { toggleSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
