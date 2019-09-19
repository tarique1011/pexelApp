import React, { Component } from 'react';
import './Home.css';
import ImageCard from '../../components/ImageCard/ImageCard';
import Button from '../../components/Button/Button';
import { updateImages, incrementFavoriteCount, resetCount } from '../../actions/imageAction';
import { connect } from 'react-redux';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [],
			loading: true
		};
	}

	goToFavorites = () => {
		this.props.history.push('/favorites');
	};

	handleLogOut = () => {
		localStorage.removeItem('user');
		this.props.resetCount();
		this.props.history.push('/');
	};

	addToFavorites(image) {
		if (!image.favorite) {
			let images = [...this.props.images];
			const { id } = image;
			for (const image of images) {
				if (image.id === id) {
					image.favorite = true;
				}
			}
			this.props.updateImages(images);
			this.props.incrementFavoriteCount();
		}
	}

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
		return this.props.images.map(image => {
			return <ImageCard key={image.id} image={image} homeScreen handleFavorite={() => this.addToFavorites(image)} />;
		});
	}

	render() {
		return (
			<div className="homeContainer">
				{this.renderHeader()}
				<div className="homeFooter">{this.renderImages()}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		images: state.images
	};
}

function mapDispatchToProps(dispatch) {
	return {
		updateImages: payload => dispatch(updateImages(payload)),
		incrementFavoriteCount: () => dispatch(incrementFavoriteCount()),
		resetCount: () => dispatch(resetCount())
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
