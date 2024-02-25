import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/slice/moviesSlice";

const useUpcomingMovies = () => {
	const dispatch = useDispatch();
	const getUpcomingMovies = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/top_rated?page=1",
			API_OPTIONS
		);
		const json = await data.json();
		dispatch(addUpcomingMovies(json.results));
	};
	useEffect(() => {
		getUpcomingMovies();
	}, []);
};

export default useUpcomingMovies;
