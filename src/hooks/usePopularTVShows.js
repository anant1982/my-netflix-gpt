import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularTVShows } from "../utils/slice/moviesSlice";

const usePopularTVShows = () => {
	const dispatch = useDispatch();
	const getPopularTVShows = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/tv/popular?page=1",
			API_OPTIONS
		);
		const json = await data.json();
		dispatch(addPopularTVShows(json.results));
	};
	useEffect(() => {
		getPopularTVShows();
	}, []);
};

export default usePopularTVShows;
