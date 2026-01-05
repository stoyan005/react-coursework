import React, { useState } from 'react';
import {
	/* Importing icons from react-icons for UI representation */
	FaBed,
	FaBath,
	FaRulerCombined,
	FaCar,
	FaMapMarkerAlt,
	FaExpand,
	FaThList,
	FaMap,
	FaFireAlt,
	FaTree,
	FaWind,
	FaBoxes,
} from 'react-icons/fa';
import styles from './HouseType.module.css';

const HouseType = ({ property }) => {
	/* State to manage which tab is currently active ('description', 'floorplan', 'map') */
	const [activeTab, setActiveTab] = useState('description');
	/* State to manage which image in the gallery is currently active */
	const [activeImage, setActiveImage] = useState(0);

	{
		/*If the property data is not yet loaded, show a loading message */
	}
	if (!property) return <div className={styles.loading_text}>Loading the best stuff...</div>;

	return (
		<div className={styles.page_wrap}>
			{/* LEFT SIDE: BIG IMAGE GALLERY */}
			<section className={styles.image_side}>
				<div className={styles.big_image}>
					<img src={property.images?.[activeImage]} alt="Property" />
					<div className={styles.image_count}>
						{activeImage + 1} / {property.images?.length}
					</div>
				</div>

				{/* MAIN THUMBNAIL FOR IMAGE SELECTION */}
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

				{/* STATISTICS OF THE HOUSE INCLUDING ICONS, STATS, TEXT */}
				<div className={styles.stats_grid}>
					<div className={styles.stat_card}>
						<FaRulerCombined />
						<div className={styles.stat_text}>
							<span className={styles.stat_number}>{property.squareFeet}</span>
							<span className={styles.stat_label}>Square Feet</span>
						</div>
					</div>

					<div className={styles.stat_card}>
						<FaBed />
						<div className={styles.stat_text}>
							<span className={styles.stat_number}>{property.bedrooms}</span>
							<span className={styles.stat_label}>Bedrooms</span>
						</div>
					</div>

					<div className={styles.stat_card}>
						<FaBath />
						<div className={styles.stat_text}>
							<span className={styles.stat_number}>{property.bathrooms}</span>
							<span className={styles.stat_label}>Bathrooms</span>
						</div>
					</div>

					<div className={styles.stat_card}>
						<FaCar />
						<div className={styles.stat_text}>
							<span className={styles.stat_number}>
								{property.parking || 'N/A'}
							</span>
							<span className={styles.stat_label}>Parking</span>
						</div>
					</div>

					<div className={styles.stat_card}>
						<FaFireAlt />
						<div className={styles.stat_text}>
							<span className={styles.stat_number}>
								{property.heating || 'N/A'}
							</span>
							<span className={styles.stat_label}>Central Heating</span>
						</div>
					</div>

					<div className={styles.stat_card}>
						<FaTree />
						<div className={styles.stat_text}>
							<span className={styles.stat_number}>
								{property.garden || 'N/A'}
							</span>
							<span className={styles.stat_label}>Garden</span>
						</div>
					</div>

					<div className={styles.stat_card}>
						<FaWind />
						<div className={styles.stat_text}>
							<span className={styles.stat_number}>
								{property.aircon || 'N/A'}
							</span>
							<span className={styles.stat_label}>Air Conditioning</span>
						</div>
					</div>

					<div className={styles.stat_card}>
						<FaBoxes />
						<div className={styles.stat_text}>
							<span className={styles.stat_number}>
								{property.storage || 'N/A'}
							</span>
							<span className={styles.stat_label}>Storage Unit</span>
						</div>
					</div>
				</div>

				{/* ICON TABS FOR DESCRIPTION, FLOORPLAN AND MAP */}
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

					{/* DESCRIPTION CONTENT */}
					<div className={styles.tab_content}>
						{activeTab === 'description' && (
							<div
								className={styles.fade}
								dangerouslySetInnerHTML={{ __html: property.description }}
							/>
						)}

						{/* FLOORPLAN CONTENT */}
						{activeTab === 'floorplan' && (
							<div className={styles.fade}>
								<img
									src={property.floorplan}
									className={styles.floorplan}
									alt="Floorplan"
								/>
							</div>
						)}

						{/* MAP CONTENT */}
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
					<a href="/contacts" className={styles.booking_button}>
						Book a Viewing
					</a>
					<button className={styles.brochure_button}>Get Brochure</button>
				</footer>
			</aside>
		</div>
	);
};

export default HouseType;
