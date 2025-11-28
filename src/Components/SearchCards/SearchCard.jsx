import React from 'react';
import './SearchCard.css';

const SearchCard = ({ image, title, description }) => {
	return (
		<div className="search_card">
			<div className="card_image">
				<img src={image} alt={title} />
			</div>
			<div className="card_content">
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default SearchCard;
