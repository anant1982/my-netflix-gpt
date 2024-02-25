import { useDispatch } from "react-redux";
import { addPopularHindiMovies } from "../utils/slice/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularHindiMovies = () => {
	const dispatch = useDispatch();
	const getPopularHindiMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/discover/movie?page=1&with_original_language=hi",
			API_OPTIONS
		);
		const json = await data.json();
		dispatch(addPopularHindiMovies(json.results));
	};
	useEffect(() => {
		getPopularHindiMovies();
	}, []);
};

export default usePopularHindiMovies;
