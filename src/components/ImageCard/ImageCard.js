import React from 'react';
import './ImageCard.css';

const ImageCard = props => {
	const { onClick, image } = props;
	return (
		<div className="imageContainer">
			<img className="image" src={image.src} alt={image.id} />
			<div className={'favoriteButton ' + (image.favorite ? 'addedToFavorite' : 'addToFavorite')}>
				<span className="favoriteText" onClick={onClick}>
					{image.favorite ? 'Added to Favorites' : 'Add To Favorites'}
				</span>
			</div>
		</div>
	);
};

export default ImageCard;
