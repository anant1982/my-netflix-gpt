import React, { useRef } from "react";
import openaiConfig from "../utils/OpenaiConfig";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/slice/gptSlice";
import { useDispatch } from "react-redux";

const GPTSearchBar = () => {
	const searchText = useRef(null);
	const dispatch = useDispatch();
	// search movie in TMDB
	const searchMovieTMDB = async (movie) => {
		const data = await fetch(
			"https://api.themoviedb.org/3/search/movie?query=" +
				movie +
				"&include_adult=false&language=en-US&original_language=hi&page=1",
			API_OPTIONS
		);
		const json = await data.json();

		return json.results;
	};
	const handleGPTSearch = async () => {
		const gptQuery =
			"Act as a Movie Recommendation system and suggest some movies for the query : " +
			searchText.current.value +
			". only give me names of 10 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

		const gptResults = await openaiConfig.chat.completions.create({
			messages: [{ role: "user", content: gptQuery }],
			model: "gpt-3.5-turbo",
		});
		console.log(gptResults.choices?.[0].message?.content);

		// convert string to array of movie names received from GPT API
		const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
		const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

		// [Promise, Promise, Promise, Promise, Promise]
		const tmdbResults = await Promise.all(promiseArray);

		console.log(tmdbResults);
		// Dispatch an action to store data in Redux store
		dispatch(
			addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
		);
	};
	return (
		<div className="w-2/3 mx-auto max-[991px]:w-full max-[991px]:px-5">
			<h1 className="font-bold text-white text-3xl mb-6">Search movies</h1>
			<form
				className="bg-black bg-opacity-75 grid grid-cols-12 gap-3 p-8 rounded-md max-[991px]:p-4 max-[991px]:grid-flow-col max-[991px]:grid-rows-2 max-[991px]:grid-cols-6"
				onSubmit={(e) => e.preventDefault()}>
				<input
					ref={searchText}
					type="text"
					placeholder="What do you want to search for?"
					className="py-3 px-5 border border-slate-500 rounded-md col-span-9 outline-none"
				/>
				<button
					className="py-3 px-5 bg-pink-700 text-white rounded-md col-span-3"
					onClick={handleGPTSearch}>
					Search
				</button>
			</form>
		</div>
	);
};

export default GPTSearchBar;
