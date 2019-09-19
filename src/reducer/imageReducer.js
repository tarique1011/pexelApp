const initialState = {
	images: []
};

const images = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_IMAGES':
			const newState = { images: action.payload };
			return newState;
		default:
			return state;
	}
};

export default images;
