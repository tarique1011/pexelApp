import React, { Component } from 'react';
import './Home.css';
import ImageCard from '../../components/ImageCard/ImageCard';
import Button from '../../components/Button/Button';
import { ROOT_URL } from '../../utils';
import axios from 'axios';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [],
			loading: true
		};
	}
	componentDidMount() {
		axios.get(ROOT_URL).then(respJson => {
			let remoteData = respJson.data;
			let images = remoteData.map((image, index) => {
				return { id: index, src: image.urls.regular, favorite: false };
			});
			this.setState({ images });
		});
	}

	goToFavorites = () => {
		window.location.href = '/favorites';
	};

	handleLogOut = () => {
		window.location.href = '/';
	};

	renderHeader() {
		return (
			<div className="homeHeader">
				<h1>Welcome To Pexel</h1>
				<div>
					<Button onClick={this.goToFavorites} buttonStyle={{ width: '100px' }} buttonTextStyle={{ fontSize: '15px' }}>
						Favorites
					</Button>
					<Button onClick={this.handleLogOut} buttonStyle={{ width: '100px' }} buttonTextStyle={{ fontSize: '15px' }}>
						Logout
					</Button>
				</div>
			</div>
		);
	}

	renderImages() {
		return this.state.images.map(image => {
			return <ImageCard key={image.id} image={image} />;
		});
	}

	render() {
		console.log(this.state.images);
		return (
			<div className="homeContainer">
				{this.renderHeader()}
				<div className="homeFooter">{this.renderImages()}</div>
			</div>
		);
	}
}

export default Home;
