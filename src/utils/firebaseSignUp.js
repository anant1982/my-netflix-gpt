import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

export const userSignUp = (email, password) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed up
			const user = userCredential.user;
			return user;
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessageStr = error.message;
			return errorCode + "-" + errorMessageStr;
		});
};
