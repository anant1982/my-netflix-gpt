import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggetions = () => {
	const { movieResults, movieNames } = useSelector((store) => store.gpt);
	if (!movieNames) return null;
	return (
		<div className="px-8 max-[991px]:px-5">
			<div className="mt-10">
				{movieNames.map((movieName, index) => (
					<div
						key={movieName}
						className="bg-black text-white bg-opacity-70 px-10 pt-8 mb-8 rounded-md max-[991px]:px-6">
						<MovieList title={movieName} movies={movieResults[index]} />
					</div>
				))}
			</div>
		</div>
	);
};

export default GPTMovieSuggetions;
