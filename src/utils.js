const API_KEY = '10c0ba732156eb349d4f6fd73d2c3c878735962f606a61e48320732c7f2e653f';

export const validateEmail = email => {
	const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	if (reg.test(email) === false) {
		return false;
	}

	return true;
};

export const ROOT_URL = `https://api.unsplash.com/photos?client_id=${API_KEY}`;
