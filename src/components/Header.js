import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/slice/userSlice";
import { auth } from "../utils/firebase";
import { USER_AVATAR } from "../utils/constants";
import { toggleSearchView } from "../utils/slice/gptSlice";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const gptSearchView = useSelector((store) => store.gpt.showGPTSearchView);
	const toggleOpenMenu = () => {
		setIsOpenMenu(!isOpenMenu);
	};
	const handleGPTSearchView = () => {
		dispatch(toggleSearchView());
	};
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				navigate("/error");
			});
	};
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				navigate("/browse");
			} else {
				dispatch(removeUser());
				navigate("/");
			}
		});

		// Unsiubscribe when component unmounts
		return () => unsubscribe();
	}, []);
	return (
		<div className="absolute w-full left-0 top-0 bg-gradient-to-b from-[rgba(0,0,0,.5)] h-[90px] z-[2] flex justify-between">
			<div>
				<Link
					to="/"
					className="h-[90px] ml-11 leading-[90px] align-middle flex items-center max-[767px]:ml-6">
					<svg
						viewBox="0 0 111 30"
						data-uia="netflix-logo"
						className="w-[167px] h-[45px] fill-red-600 align-middle max-[767px]:w-[120px]"
						aria-hidden="true"
						focusable="false">
						<g id="netflix-logo">
							<path
								d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
								id="Fill-14"></path>
						</g>
					</svg>
					<span></span>
				</Link>
			</div>
			{user && (
				<div>
					<button
						className="w-8 h-8 min-[992px]:hidden mr-6"
						onClick={toggleOpenMenu}>
						<RxHamburgerMenu className="w-8 h-8 text-white" />
					</button>
					<div className="min-[992px]:hidden">
						{isOpenMenu && (
							<div className="flex items-center pr-10 max-[991px]:pr-0 max-[991px]:flex-col max-[991px]:absolute max-[991px]:right-0 max-[991px]:bottom-[-60px] max-[991px]:items-start">
								<button
									className="py-2 px-5 bg-pink-600 text-white rounded-lg mr-6 text-sm max-[767px]:px-4 max-[767px]:mr-4 max-[767px]:text-sm"
									onClick={handleGPTSearchView}>
									{gptSearchView ? "Homepage" : "GPT Search"}
								</button>
								<div className="max-[991px]:flex max-[991px]:items-center max-[991px]:mt-3">
									<img
										className="hidden md:block w-8 h-8 mr-4"
										alt="usericon"
										src={USER_AVATAR}
									/>
									<button
										onClick={handleSignOut}
										className="font-bold text-white max-[991px]:text-sm max-[767px]:mt-3">
										Sign Out
									</button>
								</div>
							</div>
						)}
					</div>
					<div className="max-[991px]:hidden flex items-center pr-10">
						<button
							className="py-2 px-5 bg-pink-600 text-white rounded-lg mr-6 text-sm"
							onClick={handleGPTSearchView}>
							{gptSearchView ? "Homepage" : "GPT Search"}
						</button>
						<div className="flex items-center">
							<img
								className="hidden md:block w-8 h-8 mr-4"
								alt="usericon"
								src={USER_AVATAR}
							/>
							<button onClick={handleSignOut} className="font-bold text-white">
								Sign Out
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;
