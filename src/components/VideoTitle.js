const VideoTitle = ({ title, overview }) => {
	return (
		<div className="pt-[12%] px-6 md:px-20 z-[1] absolute text-white w-1/2 block h-full bg-gradient-to-r from-gray-900">
			<h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
			<p className="hidden md:inline-block py-6 text-lg">{overview}</p>
			<div className="my-4 md:m-0">
				<button className="bg-white text-black py-1 md:py-3 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
					▶️ Play
				</button>
				<button className="hidden md:inline-block ml-2 bg-gray-500 text-white py-3 px-12 text-xl bg-opacity-50 rounded-lg">
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
