import React, { useState } from 'react';
import PropertyCard from '../SearchMenu/PropertyCard';
import styles from './FavouritePanel.module.css';

// FavouritePanel shows saved properties and lets you drop new ones into it
const FavouritePanel = ({
	favourites, // list of saved properties
	isOpen, // whether the panel is open or closed
	onClose, // function to close the panel
	toggleFavourite, // function to add/remove a property from favourites
	clearFavourites, // function to remove all favourites
}) => {
	// Tracks if a draggable property is hovering over the panel
	const [isDragOver, setIsDragOver] = useState(false);

	// Needed to allow items to be dropped here
	const handleDragOver = (e) => {
		e.preventDefault();
	};

	// Triggered when a dragged property enters the panel
	// Shows a dotted border
	const handleDragEnter = (e) => {
		e.preventDefault();
		setIsDragOver(true);
	};

	// Triggered when a dragged property leaves the panel
	// Prevents flickering when moving over children elements
	const handleDragLeave = (e) => {
		if (e.currentTarget.contains(e.relatedTarget)) return;
		setIsDragOver(false);
	};

	// Triggered when a property is dropped into the panel
	const handleDrop = (e) => {
		e.preventDefault();
		setIsDragOver(false);

		// Get the dropped property data
		const data = e.dataTransfer.getData('application/property');
		if (!data) return;

		// Convert the data string back to an object
		const property = JSON.parse(data);

		// Add or remove it from favourites
		toggleFavourite(property);
	};

	return (
		<div
			// Combine panel styles with open state and drag-over effect
			className={`${styles.panel} ${isOpen ? styles.open : ''} ${
				isDragOver ? styles.dragOver : ''
			}`}
			onDragOver={handleDragOver}
			onDragEnter={handleDragEnter}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
		>
			{/* PANEL HEADER */}
			<div className={styles.header}>
				<h3>Favourited Properties ({favourites.length})</h3>

				<div className={styles.header_buttons}>
					{/* Show clear button only if there are favourites */}
					{favourites.length > 0 && (
						<button className={styles.clear_button} onClick={clearFavourites}>
							Clear all
						</button>
					)}

					{/* Close panel button */}
					<button onClick={onClose} className={styles.close_button}>
						✕
					</button>
				</div>
			</div>

			{/* PANEL CONTENT */}
			{favourites.length === 0 ? (
				// Message when no favourites exist
				<p className={styles.empty}>Drag a property here to favourite it.</p>
			) : (
				// Show list of favourite property cards
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
