import React from 'react';
import './ImageCard.css';

const ImageCard = props => {
	const { handleFavorite, image, homeScreen, favoriteScreen, removeFavorite } = props;
	return (
		<div className="imageContainer">
			<img className="image" src={image.src} alt={image.id} />
			<div
				style={{ display: homeScreen ? 'flex' : 'none' }}
				className={'favoriteButton ' + (image.favorite ? 'addedToFavorite' : 'addToFavorite')}
				onClick={handleFavorite}
			>
				<span className="favoriteText">{image.favorite ? 'Added to Favorites' : 'Add To Favorites'}</span>
			</div>
			<div style={{ display: favoriteScreen ? 'flex' : 'none' }} className="deleteButton" onClick={removeFavorite}>
				<span className="deleteText">Remove From Favorites</span>
			</div>
		</div>
	);
};

export default ImageCard;
