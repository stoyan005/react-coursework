import React, { useState } from 'react';
import styles from './HouseType.module.css';
import { FaBed, FaBath, FaRulerCombined, FaCar } from 'react-icons/fa';

const HouseType = ({ property }) => {
	const [activeTab, setActiveTab] = useState('description');
	const [activeImage, setActiveImage] = useState(0);

	if (!property) return <p>Property not found</p>;

	return (
		<div className={styles.page}>
			{/* Header */}
			<header className={styles.header}>
				<div className={styles.headerInfo}>
					<h1 className={styles.title}>{property.type}</h1>
					<p className={styles.location}>{property.location}</p>
				</div>

				<div className={styles.priceCard}>
					<span className={styles.priceLabel}>Price</span>
					<span className={styles.priceValue}>
						£{property.price.toLocaleString()}
					</span>
				</div>
			</header>

			{/* Info Cards */}
			<section className={styles.infoCards}>
				<div className={styles.card}>
					<FaRulerCombined className={styles.icon} />
					<span>{property.squareFeet} sqft</span>
				</div>
				<div className={styles.card}>
					<FaBed className={styles.icon} />
					<span>{property.bedrooms} Beds</span>
				</div>
				<div className={styles.card}>
					<FaBath className={styles.icon} />
					<span>{property.bathrooms} Baths</span>
				</div>
				{property.parking && (
					<div className={styles.card}>
						<FaCar className={styles.icon} />
						<span>{property.parking} Parking</span>
					</div>
				)}
			</section>

			{/* Gallery */}
			<section className={styles.gallery}>
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
							className={`${styles.thumb} ${
								idx === activeImage ? styles.activeThumb : ''
							}`}
							onClick={() => setActiveImage(idx)}
						/>
					))}
				</div>
			</section>

			{/* Tabs */}
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

			{/* Content */}
			<section className={styles.content}>
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
			</section>
		</div>
	);
};

export default HouseType;
