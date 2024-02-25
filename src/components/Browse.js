import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Footer from "./Footer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import usePopularTVShows from "../hooks/usePopularTVShows";
import usePopularHindiMovies from "../hooks/usePopularHindiMovies";

const Browse = () => {
	useNowPlayingMovies();
	usePopularMovies();
	useTopRatedMovies();
	useUpcomingMovies();
	usePopularTVShows();
	usePopularHindiMovies();
	return (
		<div className="bg-gray-900">
			<Header />
			<MainContainer />
			<SecondaryContainer />
			<Footer />
		</div>
	);
};

export default Browse;
