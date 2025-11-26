import { useState } from 'react';
import './SearchMenu.css';
import neighbourhood from '../../assets/photos/neighbourhood.jpg';

const SearchMenu = () => {
	const [query, setQuery] = useState('');
	const [activeTab, setActiveTab] = useState('buy');

	const searchTextMap = {
		buy: 'Search for properties to buy...',
		rent: 'Search for properties to rent...',
		sold: 'Search for properties that have sold...',
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(`Searching for: ${query} | Type: ${activeTab}`);
	};

	return (
		<div className="search_container">
			<div className="search_bar">
				<img className="search_photo" src={neighbourhood} alt="search" />

				<div className="search_overlay">
					<h2>
						Search <span>Smarter.</span> Live <span>Better.</span>
					</h2>
					<h2>Get started with searching for the right home for you!</h2>
					<div className="search_input_wrapper">
						<div className="search_types">
							{['buy', 'rent', 'sold'].map((tab) => (
								<button key={tab} className={`type_button ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
									{tab.charAt(0).toUpperCase() + tab.slice(1)}
								</button>
							))}
						</div>
						<h4 className="property_text">{searchTextMap[activeTab]}</h4>
						<div className="search_input_container">
							<input className="search_input" type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for homes..." />
							<button type="submit" className="search_button">
								Search
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchMenu;
