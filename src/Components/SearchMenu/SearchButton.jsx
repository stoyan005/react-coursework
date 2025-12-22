import React from 'react';
import styles from './SearchButton.module.css';

const SearchButton = ({ title = 'Search' }) => {
	return <button className={styles.search_here}>{title}</button>;
};

export default SearchButton;
