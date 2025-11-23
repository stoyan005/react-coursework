import { useState } from 'react';
import './SearchMenu.css';
import skyline from '../../assets/photos/skyline.jpg';

const SearchMenu = () => {
	return (
		<div className="search_container">
			<div className="search_bar">
				<img className="search_photo" src={skyline} alt="search photo" />
				<div className="search_text">
					<h2>Welcome!</h2>
					<h2>Search below to get started on your new home!</h2>
				</div>
			</div>
		</div>
	);
};

export default SearchMenu;
