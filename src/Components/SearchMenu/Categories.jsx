import React from 'react';

/* Importing images for each property category */
import styles from './Categories.module.css';
import house from '../../assets/photos/house.jpg';
import flat from '../../assets/photos/flat.jpg';
import bungalow from '../../assets/photos/bungalow.jpg';
import apartment from '../../assets/photos/apartment.jpg';
import semi_detached from '../../assets/photos/semi_detached.jpg';
import cottage from '../../assets/photos/cottage.jpg';
import terraced from '../../assets/photos/terraced.jpg';

/* Array of property categories, each with a label and corresponding image */
const categories = [
	{ label: 'House', img: house },
	{ label: 'Flat', img: flat },
	{ label: 'Bungalow', img: bungalow },
	{ label: 'Apartment', img: apartment },
	{ label: 'Detached House', img: semi_detached },
	{ label: 'Cottage', img: cottage },
	{ label: 'Terraced', img: terraced },
];

const Categories = () => {
	return (
		/* Main container for all category cards */
		<div className={styles.categories_section}>
			{categories.map((item, index) => (
				<div
					key={index}
					className={styles.category_card}
					style={{ animationDelay: `${index * 0.15}s` }}
				>
					<img src={item.img} alt={item.label} />
					<p>{item.label}</p>
				</div>
			))}
		</div>
	);
};

export default Categories;
