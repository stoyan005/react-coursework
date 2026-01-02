import React, { useState } from 'react';
import propertiesData from '../../properties/properties.json';
import SearchBar from '../Components/SearchMenu/SearchBar';
import PropertyCard from '../Components/SearchMenu/PropertyCard';
import FavouritePanel from '../Components/Favourite/FavouritePanel';

const BuyPage = () => {
	const [favourites, setFavourites] = useState([]);
	const [showFavourites, setShowFavourites] = useState(false);
	const [filteredProperties, setFilteredProperties] = useState(propertiesData.properties);

	const toggleFavourite = (property) => {
		setFavourites((prev) =>
			prev.some((p) => p.id === property.id)
				? prev.filter((p) => p.id !== property.id)
				: [...prev, property]
		);
	};

	return (
		<div className="buypage_container">
			{/* PROPERTY FAVOURITED BUTTON */}
			<div className="navbar_container">
				<SearchBar
					properties={propertiesData.properties}
					onFilter={setFilteredProperties}
					extraComponent={
						<button
							className="saved_btn"
							onClick={() => setShowFavourites((prev) => !prev)}
						>
							Favourited ({favourites.length})
						</button>
					}
				/>
			</div>

			{/* FAVOURITE PANEL */}
			<FavouritePanel
				favourites={favourites}
				isOpen={showFavourites}
				onClose={() => setShowFavourites(false)}
				toggleFavourite={toggleFavourite}
			/>

			{/* PROPERTY GRID */}
			<div className="property_grid">
				{filteredProperties.length === 0 ? (
					<div className="property_not_found">
						<p>No properties found.</p>
					</div>
				) : (
					filteredProperties.map((property) => (
						<PropertyCard
							key={property.id}
							property={property}
							isFavourite={favourites.some((p) => p.id === property.id)}
							onToggleFavourite={toggleFavourite}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default BuyPage;
