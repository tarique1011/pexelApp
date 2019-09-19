export const updateImages = payload => {
	return {
		type: 'UPDATE_IMAGES',
		payload
	};
};

export const incrementFavoriteCount = () => {
	return {
		type: 'INCREMENT_COUNT'
	};
};

export const decrementFavoriteCount = () => {
	return {
		type: 'DECREMENT_COUNT'
	};
};

export const resetCount = () => {
	return {
		type: 'RESET_COUNT'
	};
};
