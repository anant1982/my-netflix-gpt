import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ title, posterUrl }) => {
	return (
		<div className="w-[200px] h-[300px] pr-3 flex flex-nowrap">
			<img
				className="w-[200px] h-[300px] object-cover"
				src={IMG_CDN_URL + posterUrl}
				alt={title}
			/>
		</div>
	);
};

export default MovieCard;
