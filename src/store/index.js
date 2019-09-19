import { createStore } from 'redux';
import images from '../reducer/imageReducer';

function saveToStorage(state) {
	localStorage.setItem('state', JSON.stringify(state));
}

function loadFromStorage() {
	const data = localStorage.getItem('state');
	if (data === null) {
		return undefined;
	}

	return JSON.parse(data);
}

const savedData = loadFromStorage();

const store = createStore(
	images,
	savedData,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveToStorage(store.getState()));

export default store;
