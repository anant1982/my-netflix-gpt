import { useSelector } from "react-redux";
import useMovieTrailor from "../hooks/useMovieTrailor";
import ReactPlayer from "react-player";

const VideoBackground = ({ movieId }) => {
	const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
	useMovieTrailor(movieId);
	return (
		<div className="wrapper">
			<div className="frame-container">
				<ReactPlayer
					url={
						"https://www.youtube.com/embed/" +
						trailerVideo?.key +
						"?&autoplay=1&muted=1&rel=0&iv_load_policy=3"
					}
					playing={true}
					loop={true}
					volume={0}
					width={"100%"}
					height={"100%"}
				/>
			</div>
		</div>
	);
};

export default VideoBackground;
