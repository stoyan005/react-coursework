import { useState } from 'react';
import './SearchMenu.css';
import neighbourhood from '../../assets/photos/neighbourhood.jpg';

const categories = [
	{ label: 'New homes', img: '/images/new-homes.jpg' },
	{ label: 'Coastal', img: '/images/coastal.jpg' },
	{ label: 'Village', img: '/images/village.jpg' },
	{ label: 'London commute', img: '/images/london.jpg' },
	{ label: 'Swimming pool', img: '/images/pool.jpg' },
	{ label: 'Lateral living', img: '/images/lateral.jpg' },
	{ label: 'Cottages', img: '/images/cottages.jpg' },
	{ label: 'Period homes', img: '/images/period.jpg' },
	{ label: 'With land', img: '/images/with-land.jpg' },
	{ label: 'Thameside', img: '/images/thames.jpg' },
	{ label: 'Penthouse', img: '/images/penthouse.jpg' },
];

const SearchMenu = () => {
	const [query, setQuery] = useState('');
	const [activeTab, setActiveTab] = useState('buy');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(`Searching for: ${query} | Type: ${activeTab}`);
	};

	return (
		<div className="search_container">
			{/* HERO SECTION */}
			<div className="hero_bg">
				<img className="search_photo" src={neighbourhood} alt="search" />

				<div className="search_overlay">
					<h1 className="hero_title">Find your next property</h1>

					{/* REGION SWITCH */}
					<div className="region_switch">
						<label>
							<input type="radio" name="region" defaultChecked />
							UK
						</label>
						<label>
							<input type="radio" name="region" />
							Worldwide
						</label>
					</div>

					{/* SEARCH BAR */}
					<form onSubmit={handleSubmit} className="search_bar_wrapper">
						<input
							className="search_input"
							type="text"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Search by county, town or city"
						/>

						<button
							type="button"
							className={`tab_button ${activeTab === 'buy' ? 'active' : ''}`}
							onClick={() => setActiveTab('buy')}
						>
							Buy
						</button>

						<button
							type="button"
							className={`tab_button ${activeTab === 'rent' ? 'active' : ''}`}
							onClick={() => setActiveTab('rent')}
						>
							Rent
						</button>
					</form>
				</div>
			</div>

			{/* CATEGORY CARDS */}
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
