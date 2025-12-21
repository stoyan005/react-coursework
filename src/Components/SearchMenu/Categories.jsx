import React from 'react';
import './Categories.css';
import house from '../../assets/photos/house.jpg';
import flat from '../../assets/photos/flat.jpg';
import bungalow from '../../assets/photos/bungalow.jpg';
import apartment from '../../assets/photos/apartment.jpg';
import semi_detached from '../../assets/photos/semi_detached.jpg';
import cottage from '../../assets/photos/cottage.jpg';
import terraced from '../../assets/photos/terraced.jpg';

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
		<div className="categories_section">
			{categories.map((item, index) => (
				<div key={index} className="category_card">
					<img src={item.img} alt={item.label} />
					<p>{item.label}</p>
				</div>
			))}
		</div>
	);
};

export default Categories;
