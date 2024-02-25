import {
	FaFacebookF,
	FaInstagram,
	FaXTwitter,
	FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
	const fullYear = new Date();
	return (
		<div className="min-h-48 bg-black bg-opacity-70 text-gray-400 py-16">
			<div className="max-w-6xl mx-auto">
				<div className="mb-5">
					<ul className="flex">
						<li className="mb-4 mr-4">
							<a href="#">
								<FaFacebookF className="w-6 h-6" />
							</a>
						</li>
						<li className="mb-4 mr-4">
							<a href="#">
								<FaInstagram className="w-6 h-6" />
							</a>
						</li>
						<li className="mb-4 mr-4">
							<a href="#">
								<FaXTwitter className="w-6 h-6" />
							</a>
						</li>
						<li className="mb-4 mr-4">
							<a href="#">
								<FaYoutube className="w-6 h-6" />
							</a>
						</li>
					</ul>
				</div>
				<div className="grid grid-cols-4 text-sm gap-3">
					<div>
						<ul>
							<li className="mb-4">
								<a href="#">Audio Description</a>
							</li>
							<li className="mb-4">
								<a href="#">Investor Relations</a>
							</li>
							<li className="mb-4">
								<a href="#">Legal Notices</a>
							</li>
						</ul>
					</div>
					<div>
						<ul>
							<li className="mb-4">
								<a href="#">Help Centre</a>
							</li>
							<li className="mb-4">
								<a href="#">Jobs</a>
							</li>
							<li className="mb-4">
								<a href="#">Cookie Preferences</a>
							</li>
						</ul>
					</div>
					<div>
						<ul>
							<li className="mb-4">
								<a href="#">Gift Cards</a>
							</li>
							<li className="mb-4">
								<a href="#">Terms of Use</a>
							</li>
							<li className="mb-4">
								<a href="#">Corporate Information</a>
							</li>
						</ul>
					</div>
					<div>
						<ul>
							<li className="mb-4">
								<a href="#">Media Centre</a>
							</li>
							<li className="mb-4">
								<a href="#">Privacy</a>
							</li>
							<li className="mb-4">
								<a href="#">Contact Us</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="pt-10 text-center">
					<p className="text-sm">
						© {fullYear.getFullYear()} My Netflix GPT, All rights reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
