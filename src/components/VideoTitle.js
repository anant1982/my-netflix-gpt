const VideoTitle = ({ title, overview }) => {
	return (
		<div className="pt-[12%] px-6 lg:px-20 z-[1] absolute max-[991px]:top-0 max-[991px]:left-0 max-[991px]:right-0 max-[991px]:bottom-0 text-white w-1/2 block h-full bg-gradient-to-r from-gray-900 max-[991px]:w-full max-[991px]:flex max-[991px]:items-center max-[767px]:pt-[30%]">
			<div>
				<h1 className="text-2xl md:text-4xl md:mb-5 lg:text-6xl font-bold">
					{title}
				</h1>
				<p className="hidden lg:inline-block py-6 text-lg">{overview}</p>
				<div className="my-4 md:m-0">
					<button className="bg-white text-black py-2 md:py-3 px-4 md:px-12 text-sm md:text-xl rounded-lg hover:bg-opacity-80">
						▶️ Play
					</button>
					<button className="hidden md:inline-block ml-2 bg-gray-500 text-white py-3 px-12 text-xl bg-opacity-50 rounded-lg">
						More Info
					</button>
				</div>
			</div>
		</div>
	);
};

export default VideoTitle;
