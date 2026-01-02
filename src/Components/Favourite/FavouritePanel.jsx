import React, { useState } from 'react';
import PropertyCard from '../SearchMenu/PropertyCard';
import styles from './FavouritePanel.module.css';

// FavouritePanel component, responsible for displaying saved properties and acts as a drop target for dragged PropertyCards
const FavouritePanel = ({
	favourites, // array of favourited properties
	isOpen, // whether the panel is visible
	onClose, // function to close the panel
	toggleFavourite, // add/remove a single property
	clearFavourites, // clear all favourites
}) => {
	// Tracks whether a draggable item is hovering over the panel, Used to apply dotted border styling
	const [isDragOver, setIsDragOver] = useState(false);

	// Required to allow dropping
	const handleDragOver = (e) => {
		e.preventDefault();
	};

	// Fires when a draggable item enters the panel and enables the dotted border visual
	const handleDragEnter = (e) => {
		e.preventDefault();
		setIsDragOver(true);
	};

	// Fires when the dragged item leaves the panel and contains check prevents flickering when hovering over children
	const handleDragLeave = (e) => {
		if (e.currentTarget.contains(e.relatedTarget)) return;
		setIsDragOver(false);
	};

	// Fires when a PropertyCard is dropped onto the panel
	const handleDrop = (e) => {
		e.preventDefault();
		setIsDragOver(false);

		// Retrieve the property data from the drag event
		const data = e.dataTransfer.getData('application/property');
		if (!data) return;

		// Convert string back into an object
		const property = JSON.parse(data);

		// Add/remove the property from favourites
		toggleFavourite(property);
	};

	return (
		<div
			// Combines base panel styles, open state, and drag-over highlight
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
					{/* Clear button only appears when favourites exist */}
					{favourites.length > 0 && (
						<button className={styles.clear_button} onClick={clearFavourites}>
							Clear all
						</button>
					)}

					{/* CLOSE PANEL BUTTON */}
					<button onClick={onClose} className={styles.close_button}>
						✕
					</button>
				</div>
			</div>

			{/* PANEL CONTENT */}
			{favourites.length === 0 ? (
				// Empty state message when no favourites
				<p className={styles.empty}>Drag a property here to favourite it.</p>
			) : (
				// List of favourited property cards
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
