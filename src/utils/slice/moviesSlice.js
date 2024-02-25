import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
	name: "movies",
	initialState: {
		nowPlayingMovies: null,
		trailerVideo: null,
		popularMovies: null,
		topRatedMovies: null,
		upComingMovies: null,
		popularTVShows: null,
		popularHindiMovies: null,
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload;
		},
		addTopRatedMovies: (state, action) => {
			state.topRatedMovies = action.payload;
		},
		addUpcomingMovies: (state, action) => {
			state.upComingMovies = action.payload;
		},
		addPopularTVShows: (state, action) => {
			state.popularTVShows = action.payload;
		},
		addPopularHindiMovies: (state, action) => {
			state.popularHindiMovies = action.payload;
		},
		addVideoTrailor: (state, action) => {
			state.trailerVideo = action.payload;
		},
	},
});

export const {
	addNowPlayingMovies,
	addVideoTrailor,
	addPopularMovies,
	addTopRatedMovies,
	addUpcomingMovies,
	addPopularTVShows,
	addPopularHindiMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
