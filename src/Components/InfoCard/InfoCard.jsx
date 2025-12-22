import React from 'react';
import styles from './InfoCard.module.css';

const SearchCard = ({ image, title, description }) => {
	return (
		<div className={styles.search_card}>
			<div className={styles.card_image}>
				<img src={image} alt={title} />
			</div>
			<div className={styles.card_content}>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default SearchCard;
