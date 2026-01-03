import React, { useState } from 'react';
import {
	FaBed,
	FaBath,
	FaRulerCombined,
	FaCar,
	FaMapMarkerAlt,
	FaExpand,
	FaThList,
	FaMap,
} from 'react-icons/fa';
import styles from './HouseType.module.css';

const HouseType = ({ property }) => {
	const [activeTab, setActiveTab] = useState('description');
	const [activeImage, setActiveImage] = useState(0);

	if (!property) return <div className={styles.loading_text}>Loading the good stuff...</div>;

	return (
		<div className={styles.page_wrap}>
			{/* LEFT SIDE: IMAGE GALLERY */}
			<section className={styles.image_side}>
				<div className={styles.big_image}>
					<img src={property.images?.[activeImage]} alt="Property" />
					<div className={styles.image_count}>
						{activeImage + 1} / {property.images?.length}
					</div>
				</div>

				<div className={styles.thumb_row}>
					{property.images?.map((img, idx) => (
						<div
							key={idx}
							className={`${styles.thumb_item} ${
								idx === activeImage ? styles.thumb_active : ''
							}`}
							onClick={() => setActiveImage(idx)}
						>
							<img src={img} alt="" />
						</div>
					))}
				</div>
			</section>

			{/* RIGHT SIDE: DETAILS PANEL */}
			<aside className={styles.info_side}>
				<header className={styles.info_header}>
					<div className={styles.badge}>Hot Listing</div>
					<h1 className={styles.house_title}>{property.type}</h1>
					<p className={styles.house_location}>
						<FaMapMarkerAlt /> {property.location}
					</p>
					<div className={styles.house_price}>
						£{property.price?.toLocaleString()}
					</div>
				</header>

				{/* STATS */}
				<div className={styles.stats_grid}>
					<div className={styles.stat_card}>
						<FaRulerCombined />
						<div className={styles.stat_text}>
							<span className={styles.stat_number}>{property.squareFeet}</span>
							<span className={styles.stat_label}>sqft</span>
						</div>
					</div>

					<div className={styles.stat_card}>
						<FaBed />
						<div className={styles.stat_text}>
							<span className={styles.stat_number}>{property.bedrooms}</span>
							<span className={styles.stat_label}>beds</span>
						</div>
					</div>

					<div className={styles.stat_card}>
						<FaBath />
						<div className={styles.stat_text}>
							<span className={styles.stat_number}>{property.bathrooms}</span>
							<span className={styles.stat_label}>baths</span>
						</div>
					</div>

					<div className={styles.stat_card}>
						<FaCar />
						<div className={styles.stat_text}>
							<span className={styles.stat_number}>
								{property.parking || 'N/A'}
							</span>
							<span className={styles.stat_label}>parking</span>
						</div>
					</div>
				</div>

				{/* TABS */}
				<div className={styles.tabs_wrap}>
					<nav className={styles.tabs}>
						<button
							className={activeTab === 'description' ? styles.tab_active : ''}
							onClick={() => setActiveTab('description')}
						>
							<FaThList /> Details
						</button>

						<button
							className={activeTab === 'floorplan' ? styles.tab_active : ''}
							onClick={() => setActiveTab('floorplan')}
						>
							<FaExpand /> Floor Plan
						</button>

						<button
							className={activeTab === 'map' ? styles.tab_active : ''}
							onClick={() => setActiveTab('map')}
						>
							<FaMap /> Map
						</button>
					</nav>

					<div className={styles.tab_content}>
						{activeTab === 'description' && (
							<div
								className={styles.fade}
								dangerouslySetInnerHTML={{ __html: property.description }}
							/>
						)}

						{activeTab === 'floorplan' && (
							<div className={styles.fade}>
								<img
									src={property.floorplan}
									className={styles.floorplan}
									alt="Floorplan"
								/>
							</div>
						)}

						{activeTab === 'map' && (
							<iframe
								src={property.mapUrl}
								className={styles.map}
								title="Location"
								allowFullScreen
							/>
						)}
					</div>
				</div>

				<footer className={styles.action_bar}>
					<button className={styles.btn_primary}>Book a Viewing</button>
					<button className={styles.btn_secondary}>Get Brochure</button>
				</footer>
			</aside>
		</div>
	);
};

export default HouseType;
