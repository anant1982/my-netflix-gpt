import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggetions from "./GPTMovieSuggetions";

const GPTSearchPage = () => {
	return (
		<div className="bg-gray-600 pt-[120px]">
			<div className="py-9 min-h-[500px]">
				<GPTSearchBar />
				<GPTMovieSuggetions />
			</div>
		</div>
	);
};

export default GPTSearchPage;
