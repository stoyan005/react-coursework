import { useState } from 'react';
import './SearchMenu.css';
import house from '../../assets/photos/house.jpg';
import flat from '../../assets/photos/flat.jpg';
import bungalow from '../../assets/photos/bungalow.jpg';
import apartment from '../../assets/photos/apartment.jpg';
import semi_detached from '../../assets/photos/semi_detached.jpg';
import cottage from '../../assets/photos/cottage.jpg';
import terraced from '../../assets/photos/terraced.jpg';
import home_video from '../../assets/photos/home_video.mp4';

const categories = [
	{ label: 'House', img: house },
	{ label: 'Flat', img: flat },
	{ label: 'Bungalow', img: bungalow },
	{ label: 'Apartment', img: apartment },
	{ label: 'Detached House', img: semi_detached },
	{ label: 'Cottage', img: cottage },
	{ label: 'Terraced', img: terraced },
];

const SearchMenu = () => {
	const [query, setQuery] = useState('');
	const [activeTab, setActiveTab] = useState('buy');

	const searchTextMap = {
		buy: 'Search for properties to buy...',
		rent: 'Search for properties to rent...',
		sold: 'Search for properties that have sold...',
	};

	return (
		<div className="search_container">
			<div className="search_bar">
				<video
					className="search_video"
					src={home_video}
					alt="home page video"
					autoPlay
					loop
					muted
				/>
				<div className="search_overlay">
					<h2>
						Search <span>Smarter.</span> Live <span>Better.</span>
					</h2>
					<h3>Get started with searching for the right home for you!</h3>

					<div className="search_input_wrapper">
						<h4 className="property_text">{searchTextMap[activeTab]}</h4>

						<div className="search_input_container">
							<input
								className="search_input"
								type="text"
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder={searchTextMap[activeTab]}
							/>
							<button type="submit" className="search_button">
								Search
							</button>
						</div>
						<div className="search_types">
							{['buy', 'rent', 'sold'].map((tab) => (
								<button
									key={tab}
									className={`type_button ${
										activeTab === tab ? 'active' : ''
									}`}
									onClick={() => setActiveTab(tab)}
								>
									{tab.charAt(0).toUpperCase() + tab.slice(1)}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="categories_section">
				{categories.map((item, index) => (
					<div key={index} className="category_card">
						<img src={item.img} alt={item.label} />
						<p>{item.label}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SearchMenu;
