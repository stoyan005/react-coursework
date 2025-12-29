import React, { useState } from 'react';
import styles from './HouseType.module.css';

const HouseType = ({ property }) => {
	const [activeTab, setActiveTab] = useState('description');

	if (!property) return <p>Property not found</p>;

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{property.type}</h1>
			<h3 className={styles.location}>{property.location}</h3>
			<h2 className={styles.price}>£{property.price.toLocaleString()}</h2>

			{/* Image Gallery */}
			<div className={styles.gallery}>
				{property.images?.map((img, idx) => (
					<img
						key={idx}
						src={img}
						alt={`View ${idx + 1}`}
						className={styles.image}
					/>
				))}
			</div>

			{/* Tabs */}
			<div className={styles.tabs}>
				<button
					className={activeTab === 'description' ? styles.active : ''}
					onClick={() => setActiveTab('description')}
				>
					Description
				</button>
				<button
					className={activeTab === 'floorplan' ? styles.active : ''}
					onClick={() => setActiveTab('floorplan')}
				>
					Floor Plan
				</button>
				<button
					className={activeTab === 'map' ? styles.active : ''}
					onClick={() => setActiveTab('map')}
				>
					Map
				</button>
			</div>

			<div className={styles.tabContent}>
				{activeTab === 'description' && (
					<p dangerouslySetInnerHTML={{ __html: property.description }} />
				)}
				{activeTab === 'floorplan' && (
					<img
						src={property.floorplan}
						alt="Floor Plan"
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
