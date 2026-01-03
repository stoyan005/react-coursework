import React, { useState } from 'react';
import styles from './HouseType.module.css';
import { FaBed, FaBath, FaRulerCombined, FaCar } from 'react-icons/fa';

const HouseType = ({ property }) => {
	const [activeTab, setActiveTab] = useState('description');
	const [activeImage, setActiveImage] = useState(0);

	if (!property) return <p>Property not found</p>;

	return (
		<div className={styles.page}>
			{/* HEADER WITH PRICE CARD AND LOCATION NAME */}
			<header className={styles.header}>
				<div className={styles.header_info}>
					<h1 className={styles.title}>{property.type}</h1>
					<p className={styles.location}>{property.location}</p>
				</div>

				<div className={styles.price_card}>
					<span className={styles.price_label}>Price</span>
					<span className={styles.price_value}>
						£{property.price.toLocaleString()}
					</span>
				</div>
			</header>

			{/* INFORMATION CARDS */}
			<div className={styles.info_cards}>
				<div className={styles.card}>
					<FaRulerCombined className={styles.icon} />
					<span>{property.squareFeet} sqft</span>
				</div>
				<div className={styles.card}>
					<FaBed className={styles.icon} />
					<span>{property.bedrooms} Bedrooms</span>
				</div>
				<div className={styles.card}>
					<FaBath className={styles.icon} />
					<span>{property.bathrooms} Bathrooms</span>
				</div>
				{property.parking && (
					<div className={styles.card}>
						<FaCar className={styles.icon} />
						<span>Parking: {property.parking}</span>
					</div>
				)}
			</div>

			{/* GALLERY WITH 8 PHOTOS */}
			<div className={styles.gallery}>
				<img
					src={property.images?.[activeImage]}
					alt="Main property view"
					className={styles.mainImage}
				/>

				<div className={styles.thumbnails}>
					{property.images?.map((img, idx) => (
						<img
							key={idx}
							src={img}
							alt={`Thumbnail ${idx + 1}`}
							className={`${styles.photo} ${
								idx === activeImage ? styles.active_photo : ''
							}`}
							onClick={() => setActiveImage(idx)}
						/>
					))}
				</div>
			</div>

			{/* TABS FOR DESCRIPTION, FLOORPLAN, MAP */}
			<nav className={styles.tabs}>
				{['description', 'floorplan', 'map'].map((tab) => (
					<button
						key={tab}
						className={activeTab === tab ? styles.activeTab : ''}
						onClick={() => setActiveTab(tab)}
					>
						{tab.charAt(0).toUpperCase() + tab.slice(1)}
					</button>
				))}
			</nav>

			{/* CONTENT INSIDE THE TABS */}
			<div className={styles.content}>
				{activeTab === 'description' && (
					<div
						className={styles.description}
						dangerouslySetInnerHTML={{ __html: property.description }}
					/>
				)}

				{activeTab === 'floorplan' && (
					<img
						src={property.floorplan}
						alt="Floor plan"
						className={styles.floorplan}
					/>
				)}

				{activeTab === 'map' && (
					<iframe
						src={property.mapUrl}
						title="Google Map"
						className={styles.map}
						allowFullScreen
					/>
				)}
			</div>
		</div>
	);
};

export default HouseType;
