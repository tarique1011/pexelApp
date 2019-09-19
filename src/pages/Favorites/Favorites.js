import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageCard from '../../components/ImageCard/ImageCard';
import './favorites.css';
import Button from '../../components/Button/Button';
import { updateImages, decrementFavoriteCount, resetCount } from '../../actions/imageAction';

class Favorites extends Component {
	goToHome = () => {
		this.props.history.push('/home');
	};

	handleLogout = () => {
		localStorage.removeItem('user');
		this.props.resetCount();
		this.props.history.push('/');
	};

	handleRemoveFavorite(id) {
		let images = [...this.props.images];
		for (const image of images) {
			if (image.id === id) {
				image.favorite = false;
			}
		}
		this.props.updateImages(images);
		this.props.decrementFavoriteCount();
	}

	renderHeader() {
		return (
			<div className="favoriteHeader">
				<h1>Your Favorites</h1>
				<div>
					<Button onClick={this.goToHome} buttonStyle={{ width: '100px' }} buttonTextStyle={{ fontSize: '15px' }}>
						Home
					</Button>
					<Button onClick={this.handleLogout} buttonStyle={{ width: '100px' }} buttonTextStyle={{ fontSize: '15px' }}>
						Logout
					</Button>
				</div>
			</div>
		);
	}

	renderImages() {
		return this.props.images.map(image => {
			if (image.favorite) {
				return (
					<ImageCard
						key={image.id}
						favoriteScreen
						removeFavorite={() => this.handleRemoveFavorite(image.id)}
						image={image}
					/>
				);
			}
			return null;
		});
	}

	renderFooter() {
		if (this.props.count !== 0) {
			return <div className="favoriteFooter">{this.renderImages()}</div>;
		}
		return (
			<div className="emptyFooter">
				<span className="emptyText">You have no Favorites</span>
			</div>
		);
	}

	render() {
		return (
			<div className="favoriteContainer">
				{this.renderHeader()}
				{this.renderFooter()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		images: state.images,
		count: state.count
	};
}

function mapDispatchToProps(dispatch) {
	return {
		updateImages: payload => dispatch(updateImages(payload)),
		decrementFavoriteCount: () => dispatch(decrementFavoriteCount()),
        resetCount: () => dispatch(resetCount())
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Favorites);
