import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
	const moviesData = useSelector((store) => store.movies);
	console.log(moviesData?.topRatedMovies);
	return (
		<div className="pl-20 -mt-48 relative z-10">
			<MovieList
				title="Popular Hindi Movies"
				movies={moviesData?.popularHindiMovies}
			/>
			<MovieList
				title="Now playing Hollywood Movies"
				movies={moviesData?.nowPlayingMovies}
			/>
			<MovieList
				title="Top Rated Hollywood Movies"
				movies={moviesData?.topRatedMovies}
			/>
			<MovieList
				title="Popular Hollywood Movies"
				movies={moviesData?.popularMovies}
			/>
			<MovieList
				title="Upcoming Hollywood Movies"
				movies={moviesData?.upComingMovies}
			/>
			<MovieList title="Popular TV Shows" movies={moviesData?.popularTVShows} />
			{/* <MovieList title="Tamil" movies={moviesData?.nowPlayingMovies} />
			<MovieList title="Hollywood" movies={moviesData?.nowPlayingMovies} /> */}
		</div>
	);
};

export default SecondaryContainer;
