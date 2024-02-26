import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
	return (
		<div className="overflow-hidden">
			<h1 className="text-white text-xl md:text-2xl font-bold mb-5">{title}</h1>
			<div className="overflow-x-scroll flex mb-8">
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
