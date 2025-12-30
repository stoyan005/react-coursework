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
			{/* Image Section */}
			<div className={styles.image_container}>
				<img
					src={property.picture}
					alt={property.type}
					className={styles.property_image}
				/>

				{/* Overlay */}
				<div className={styles.image_overlay}>
					<div className={styles.image_top}>
						<span className={styles.image_badge}>{property.tenure}</span>
						<span className={styles.image_badge}>
							{property.added.day} {property.added.month} {property.added.year}
						</span>
					</div>

					<div className={styles.image_bottom}>
						<h3 className={styles.image_title}>{property.type}</h3>
					</div>
				</div>
			</div>

			{/* Content */}
			<div className={styles.card_content}>
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
