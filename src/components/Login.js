import Header from "./Header";
import { LOGIN_BG_IMG } from "../utils/constants";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/slice/userSlice";
import { useDispatch } from "react-redux";
import { USER_AVATAR } from "../utils/constants";
const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const dispatch = useDispatch();

	const name = useRef(null);
	const phone = useRef(null);
	const email = useRef(null);
	const password = useRef(null);
	const handleClick = () => {
		setIsSignInForm(!isSignInForm);
	};
	const handleValidation = () => {
		const message = checkValidData(email.current.value, password.current.value);
		setErrorMessage(message);
		if (message) return;
		if (!isSignInForm) {
			// Sign up logic
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;
					updateProfile(user, {
						displayName: name.current.value,
						phoneNumber: phone.current.value,
						photoURL: USER_AVATAR,
					})
						.then(() => {
							const { uid, email, displayName, phoneNumber, photoURL } =
								auth.currentUser;
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									phoneNumber: phoneNumber,
									photoURL: photoURL,
								})
							);
						})
						.catch((error) => {
							setErrorMessage(error.message);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessageStr = error.message;
					setErrorMessage(errorCode + "-" + errorMessageStr);
				});
		} else {
			// Sign in logic
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessageStr = error.message;
					setErrorMessage(errorCode + "-" + errorMessageStr);
				});
		}
	};
	return (
		<div className="relative text-white min-h-full z-0 bg-black">
			<div className="absolute bg-cover block h-full min-h-screen overflow-hidden w-full z-[-1] opacity-50">
				<img src={LOGIN_BG_IMG} alt="logo" />
			</div>
			<Header />
			<div className="bg-transparent relative m-[0_auto] max-w-[450px] min-h-screen flex items-center justify-center">
				<div className="bg-black bg-opacity-75 p-16 box-border rounded-md">
					<div>
						<h1 className="text-3xl mb-6">
							{isSignInForm ? "Sign In" : "Sign Up"}
						</h1>
						<form onSubmit={(e) => e.preventDefault()}>
							{!isSignInForm && (
								<input
									ref={name}
									type="text"
									placeholder="Full Name"
									className="w-full p-4 mb-5 bg-gray-600 outline-none"
								/>
							)}
							{!isSignInForm && (
								<input
									ref={phone}
									type="tel"
									placeholder="Mobile Number"
									className="w-full p-4 mb-5 bg-gray-600 outline-none"
								/>
							)}
							<input
								ref={email}
								type="email"
								placeholder="Email address"
								className="w-full p-4 mb-5 bg-gray-600 outline-none"
							/>
							<input
								ref={password}
								type="password"
								placeholder="Password"
								className="w-full p-4 mb-5 bg-gray-600 outline-none"
							/>
							<p className="mb-4 text-red-700">{errorMessage}</p>
							<button
								className="py-4 px-5 w-full bg-red-700 rounded-md"
								onClick={handleValidation}>
								{isSignInForm ? "Sign In" : "Sign Up"}
							</button>
						</form>
					</div>
					<p
						className="mt-10 cursor-pointer text-gray-500"
						onClick={handleClick}>
						{isSignInForm
							? "New to Netflix? Sign up now."
							: "Already a user? Sign in now"}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
