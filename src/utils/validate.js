export const checkValidData = (email, password) => {
	const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
		email
	);
	const isPasswordvalid =
		/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
	if (!isEmailValid && !isPasswordvalid)
		return "Email id and/or Password is not correct";
	if (!isEmailValid) return "Email is not valid";
	if (!isPasswordvalid) return "Password is not valid";
	return null;
};
