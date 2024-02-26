import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
	const moviesData = useSelector((store) => store.movies);
	return (
		<div className="lg:pl-20 pl-5 -mt-48 relative z-10 pb-8 max-[991px]:mt-8">
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
		</div>
	);
};

export default SecondaryContainer;
