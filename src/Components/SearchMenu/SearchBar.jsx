import React, { useState, useMemo } from 'react';
import data from '../../../properties/properties.json';
import styles from './SearchBar.module.css';

const SearchBar = ({ onFilter, extraComponent }) => {
	const [query, setQuery] = useState('');
	const [activeTab, setActiveTab] = useState('buy');

	const properties = data.properties;

	const filteredProperties = useMemo(() => {
		const searchValue = query.toLowerCase();
		return properties.filter(
			(property) =>
				property.type.toLowerCase().includes(searchValue) ||
				property.location.toLowerCase().includes(searchValue) ||
				property.description.toLowerCase().includes(searchValue)
		);
	}, [query, properties]);

	useMemo(() => {
		onFilter(filteredProperties);
	}, [filteredProperties, onFilter]);

	return (
		<div>
			<div className={styles.search_wrapper}>
				<div className={styles.search_header}>
					<div className={styles.search_input_wrapper}>
						<div className={styles.search_input_row}>
							<div className={styles.search_types}>
								{['buy', 'rent', 'sold'].map((tab) => (
									<button
										key={tab}
										className={`${styles.type_button} ${
											activeTab === tab ? styles.active : ''
										}`}
										onClick={() => setActiveTab(tab)}
									>
										{tab.charAt(0).toUpperCase() + tab.slice(1)}
									</button>
								))}
							</div>

							{/* SEARCH INPUT */}
							<input
								className={styles.search_input}
								type="text"
								value={query}
								onChange={(e) => setQuery(e.target.value)}
								placeholder={`Search ${activeTab} properties...`}
							/>

							<p className={styles.properties_found}>
								{filteredProperties.length} of {properties.length}{' '}
								{properties.length === 1 ? 'property' : 'properties'} found
							</p>
							{extraComponent}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
