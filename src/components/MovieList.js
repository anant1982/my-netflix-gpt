import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
	console.log(movies);
	return (
		<div className="overflow-hidden">
			<h1 className="text-white text-2xl font-bold mb-5">{title}</h1>
			<div className="overflow-x-scroll flex pb-8">
				<div className="flex flex-auto">
					{movies?.map((movie) => (
						<MovieCard
							key={movie.id}
							posterUrl={movie.poster_path}
							title={movie.original_title}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
