import React from 'react';
import './SearchCard.css';
import real_estate1 from '../../assets/photos/real_estate1.jpg';

const SearchCard = () => {
	return (
		<div className="search_card">
			<div className="card_image">
				<img src={real_estate1} alt="real estate photo" />
			</div>
			<div className="card_content">
				<h2>Home Value Estimate</h2>
				<p>Get an instant estimate of your home’s market value using real-time neighborhood data.</p>
			</div>
		</div>
	);
};

export default SearchCard;
