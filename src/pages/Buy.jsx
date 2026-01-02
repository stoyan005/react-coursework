import React, { useState } from 'react';
import propertiesData from '../../properties/properties.json';
import SearchBar from '../Components/SearchMenu/SearchBar';
import PropertyCard from '../Components/SearchMenu/PropertyCard';
import FavouritePanel from '../Components/Favourite/FavouritePanel';

const BuyPage = () => {
	const [favourites, setFavourites] = useState([]);
	const [showFavourites, setShowFavourites] = useState(false);

	const toggleFavourite = (property) => {
		console.log('Toggling favourite:', property.id); // Debug log
		setFavourites((prev) =>
			prev.some((p) => p.id === property.id)
				? prev.filter((p) => p.id !== property.id)
				: [...prev, property]
		);
	};

	return (
		<div style={{ padding: '1rem' }}>
			<SearchBar />

			<button
				onClick={() => setShowFavourites((prev) => !prev)}
				style={{
					margin: '1rem 0',
					padding: '0.5rem 1rem',
					borderRadius: '0.5rem',
					background: '#2563eb',
					color: '#fff',
					fontWeight: '500',
					cursor: 'pointer',
				}}
			>
				Saved ({favourites.length})
			</button>

			{/* Favourite panel */}
			<FavouritePanel
				favourites={favourites}
				isOpen={showFavourites}
				onClose={() => setShowFavourites(false)}
				toggleFavourite={toggleFavourite}
			/>

			{/* Property grid */}
			<div
				style={{
					display: 'grid',
					gap: '2rem',
					gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
				}}
			>
				{propertiesData.properties.map((property) => (
					<PropertyCard
						key={property.id}
						property={property}
						isFavourite={favourites.some((p) => p.id === property.id)}
						onToggleFavourite={toggleFavourite}
					/>
				))}
			</div>
		</div>
	);
};

export default BuyPage;
