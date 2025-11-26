import React from 'react';
import SearchMenu from '../Components/SearchMenu/SearchMenu';
import SearchCard from '../Components/SearchCards/SearchCard';

const HomePage = () => {
	return (
		<>
			<SearchMenu />
			<div className="cards_container">
				<SearchCard />
				<SearchCard />
				<SearchCard />
			</div>
		</>
	);
};

export default HomePage;
