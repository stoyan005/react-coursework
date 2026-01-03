import React, { useState, useMemo, useEffect } from 'react';
import data from '../../../properties/properties.json';
import styles from './SearchBar.module.css';

const monthMap = {
	January: 0,
	February: 1,
	March: 2,
	April: 3,
	May: 4,
	June: 5,
	July: 6,
	August: 7,
	September: 8,
	October: 9,
	November: 10,
	December: 11,
};

// Helper to convert added object to JS Date
const getDateFromAdded = (added) => new Date(added.year, monthMap[added.month], added.day);

const SearchBar = ({ onFilter, extraComponent }) => {
	const [query, setQuery] = useState('');
	const [activeTab, setActiveTab] = useState('buy');
	const [sortBy, setSortBy] = useState('none');

	const properties = data.properties;

	const filteredProperties = useMemo(() => {
		const searchValue = query.toLowerCase();

		// FILTER
		let result = properties.filter(
			(property) =>
				property.type.toLowerCase().includes(searchValue) ||
				property.location.toLowerCase().includes(searchValue) ||
				property.description.toLowerCase().includes(searchValue)
		);

		// CLONE ARRAY BEFORE SORTING
		result = [...result];

		// SORT (single dropdown)
		result.sort((a, b) => {
			if (sortBy === 'price-asc') {
				return Number(a.price) - Number(b.price);
			}

			if (sortBy === 'price-desc') {
				return Number(b.price) - Number(a.price);
			}

			if (sortBy === 'date-asc') {
				return getDateFromAdded(a.added) - getDateFromAdded(b.added);
			}

			if (sortBy === 'date-desc') {
				return getDateFromAdded(b.added) - getDateFromAdded(a.added);
			}

			return 0;
		});

		return result;
	}, [query, properties, sortBy]);

	// NOTIFY PARENT
	useEffect(() => {
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

							{/* SORT DROPDOWN MENU */}
							<select
								className={styles.sort_dropdown}
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
							>
								<option value="none">Sort by</option>
								<option value="price-asc">Price: Low → High</option>
								<option value="price-desc">Price: High → Low</option>
								<option value="date-asc">Date Added: Old → New</option>
								<option value="date-desc">Date Added: New → Old</option>
							</select>

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
