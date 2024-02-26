import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ title, posterUrl }) => {
	return (
		<div className="w-[200px] h-[300px] pr-3 flex flex-nowrap max-[767px]:w-[150px] max-[767px]:h-[225px]">
			<img
				className="w-[200px] h-[300px] max-[767px]:w-[150px] max-[767px]:h-[225px] object-cover"
				src={IMG_CDN_URL + posterUrl}
				alt={title}
			/>
		</div>
	);
};

export default MovieCard;
