import React from 'react';
import SearchMenu from '../Components/SearchMenu/SearchMenu';
import Categories from '../Components/SearchMenu/Categories';
import SearchCard from '../Components/SearchCards/SearchCard';
import real_estate1 from '../assets/photos/real_estate1.jpg';
import mortgage_calc from '../assets/photos/mortgage_calc.jpg';
import market_trend from '../assets/photos/market_trend.jpg';

const HomePage = () => {
	return (
		<>
			<SearchMenu />
			<div>
				<Categories />
			</div>
			<div className="cards_container">
				<SearchCard
					image={real_estate1}
					title="Home Value Estimate"
					description="Get an instant estimate of your property's worth based on recent sales and local market data. Perfect for sellers or homeowners curious about equity."
				/>
				<SearchCard
					image={mortgage_calc}
					title="Mortgage Calculator"
					description="Calculate your monthly payments, compare interest rates, and see how different loan options fit your budget before you start shopping."
				/>
				<SearchCard
					image={market_trend}
					title="Market Trends"
					description="Explore real-time market insights, including price fluctuations, average days on market, and neighborhood comparisons to help you make informed decisions."
				/>
			</div>
		</>
	);
};

export default HomePage;
