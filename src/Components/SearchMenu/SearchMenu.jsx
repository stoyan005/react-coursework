import { useState } from 'react';
import './SearchMenu.css';
import neighbourhood from '../../assets/photos/neighbourhood.jpg';
import houseImg from '../../assets/photos/neighbourhood.jpg';

const categories = [
	{ label: 'House', img: houseImg },
	{ label: 'Flat', img: houseImg },
	{ label: 'Bungalow', img: houseImg },
	{ label: 'Apartment', img: houseImg },
	{ label: 'Detached House', img: houseImg },
	{ label: 'Cottage', img: houseImg },
	{ label: 'Terraced', img: houseImg },
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
				<img className="search_photo" src={neighbourhood} alt="search" />

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
								placeholder="Search for homes..."
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
