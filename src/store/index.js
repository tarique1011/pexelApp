import { createStore } from 'redux';
import images from '../reducer/imageReducer';

const store = createStore(images, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
