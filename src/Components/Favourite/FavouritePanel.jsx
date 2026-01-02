import React from 'react';
import PropertyCard from '../SearchMenu/PropertyCard';
import styles from './FavouritePanel.module.css';

const FavouritePanel = ({ favourites = [], isOpen = false, onClose, toggleFavourite }) => {
	return (
		<div className={`${styles.panel} ${isOpen ? styles.open : ''}`}>
			<div className={styles.header}>
				<h3>Saved Properties ({favourites.length})</h3>
				<button onClick={onClose} className={styles.closeBtn}>
					✕
				</button>
			</div>

			{favourites.length === 0 ? (
				<p className={styles.empty}>No saved properties yet.</p>
			) : (
				<div className={styles.list}>
					{favourites.map((property) => (
						<div key={property.id} className={styles.item}>
							<PropertyCard
								property={property}
								isFavourite={true}
								onToggleFavourite={() => toggleFavourite(property)}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default FavouritePanel;
