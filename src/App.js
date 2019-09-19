import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Login} />
			<Route path="/home" component={Home} />
			<Route path="/favorites" component={Favorites} />
		</Switch>
	);
}

export default App;
