import React from 'react';
import { Link } from 'react-router-dom';
import { IoBed } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { FaMoneyBillWave } from 'react-icons/fa';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import styles from './PropertyCard.module.css';

const lengthText = (text, maxLength) =>
	text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

const PropertyCard = ({ property, isFavourite, onToggleFavourite }) => {
	return (
		<div className={styles.property_card}>
			<div className={styles.image_container}>
				<img
					src={property.picture}
					alt={property.type}
					className={styles.property_image}
				/>

				<div className={styles.image_overlay}>
					<div className={styles.image_top}>
						<h3 className={styles.image_title}>{property.type}</h3>

						{/* Heart button */}
						<button
							className={styles.heartBtn}
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								onToggleFavourite(property);
							}}
						>
							{isFavourite ? (
								<AiFillHeart className={styles.heartIconActive} size={26} />
							) : (
								<AiOutlineHeart className={styles.heartIcon} size={26} />
							)}
						</button>
					</div>

					<div className={styles.image_bottom}>
						<span className={styles.image_badge}>{property.tenure}</span>
						<span className={styles.image_badge}>
							Added: {property.added.day} {property.added.month}{' '}
							{property.added.year}
						</span>
					</div>
				</div>
			</div>

			<div className={styles.card_content}>
				<p className={styles.description}>{lengthText(property.description, 200)}</p>

				<div className={styles.card_details}>
					<p>
						<IoBed className={styles.bed_icon} /> {property.bedrooms}
					</p>
					<p>
						<FaLocationDot className={styles.location_icon} /> {property.location}
					</p>
					<p>
						<FaMoneyBillWave className={styles.price_icon} /> £
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
