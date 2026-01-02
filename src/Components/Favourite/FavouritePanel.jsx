import React from 'react';
import PropertyCard from '../SearchMenu/PropertyCard';
import styles from './FavouritePanel.module.css';

const FavouritePanel = ({ favourites, isOpen, onClose, toggleFavourite, clearFavourites }) => {
	return (
		<div className={`${styles.panel} ${isOpen ? styles.open : ''}`}>
			{/* MAIN FAVOURITE MENU */}
			<div className={styles.header}>
				<h3>Favourited Properties ({favourites.length})</h3>

				<div className={styles.header_buttons}>
					{favourites.length > 0 && (
						<button className={styles.clear_button} onClick={clearFavourites}>
							Clear all
						</button>
					)}

					<button onClick={onClose} className={styles.close_button}>
						✕
					</button>
				</div>
			</div>

			{/* FAVOURITE MENU CONTENT */}
			{favourites.length === 0 ? (
				<p className={styles.empty}>No favourited properties yet.</p>
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
