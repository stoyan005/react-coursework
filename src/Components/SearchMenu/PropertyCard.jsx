import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PropertyCard.module.css';
import { IoBed } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { FaMoneyBillWave } from 'react-icons/fa';

const lengthText = (text, maxLength) =>
	text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

const PropertyCard = ({ property }) => {
	return (
		<div className={styles.property_card}>
			<img src={property.picture} alt={property.type} className={styles.property_image} />
			<div className={styles.card_content}>
				<h3>{property.type}</h3>
				<div className={styles.badges}>
					<div className={styles.badges_wrapper}>
						<span className={styles.tenure}>{property.tenure}</span>
						<span className={styles.dateAdded}>
							Added: {property.added.day} {property.added.month}{' '}
							{property.added.year}
						</span>
					</div>
				</div>
				<p className={styles.description}>{lengthText(property.description, 260)}</p>
				<div className={styles.card_details}>
					<p>
						<IoBed className={styles.icon} /> {property.bedrooms}
					</p>
					<p>
						<FaLocationDot className={styles.icon} /> {property.location}
					</p>
					<p>
						<FaMoneyBillWave className={styles.icon} /> £
						{property.price.toLocaleString()}
					</p>
				</div>
				<Link to={`/house/${property.id}`} className={styles.view_button}>
					View Property Here!
				</Link>
			</div>
		</div>
	);
};

export default PropertyCard;
