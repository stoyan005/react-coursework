import { useState } from 'react';
import styles from './SearchMenu.module.css';
import SearchButton from './SearchButton';
import home_video from '../../assets/photos/home_video.mp4';

const SearchMenu = () => {
	const [query, setQuery] = useState('');
	const [activeTab, setActiveTab] = useState('buy');

	const searchTextMap = {
		buy: 'Search for properties to buy...',
		rent: 'Search for properties to rent...',
		sold: 'Search for properties that have sold...',
	};

	return (
		<div className={styles.search_container}>
			<div className={styles.search_bar}>
				<video
					className={styles.search_video}
					src={home_video}
					alt="home page video"
					autoPlay
					loop
					muted
				/>
				<div className={styles.search_overlay}>
					<h2>
						Search <span>Smarter.</span> Live <span>Better.</span>
					</h2>
					<h3>
						Step into a world of exceptional homes where comfort, style, and
						convenience come together. Make your dream home a reality.
					</h3>

					<SearchButton />
					{/*
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
					*/}
				</div>
			</div>
		</div>
	);
};

export default SearchMenu;
