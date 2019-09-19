const initialState = {
	images: [],
	count: 0
};

const images = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_IMAGES':
			return { ...state, images: action.payload };
		case 'INCREMENT_COUNT':
			return { ...state, count: state.count + 1 };
		case 'DECREMENT_COUNT':
			console.log(state.count);
			return { ...state, count: state.count - 1 };
		case 'RESET_COUNT':
			return { ...state, count: 0 };
		default:
			return state;
	}
};

export default images;
