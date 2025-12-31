import React from 'react';
import InfoCounter from '../Components/InfoCard/InfoCounter';
import SearchMenu from '../Components/SearchMenu/SearchMenu';
import Categories from '../Components/SearchMenu/Categories';
import InfoCard from '../Components/InfoCard/InfoCard';
import real_estate1 from '../assets/photos/real_estate1.jpg';
import mortgage_calc from '../assets/photos/mortgage_calc.jpg';
import market_trend from '../assets/photos/market_trend.jpg';
import modern_building from '../assets/photos/modern_building.jpg';
import energy_efficient from '../assets/photos/energy_efficient.jpg';
import upcoming_development from '../assets/photos/upcoming_development.jpg';

const HomePage = () => {
	return (
		<>
			<SearchMenu />
			<div>
				<Categories />
			</div>
			<div>
				<InfoCounter />
			</div>
			<div className="cards_container">
				<InfoCard
					image={real_estate1}
					title="Home Value Estimate"
					description="Get an instant estimate of your property's worth based on recent sales and local market data. Perfect for sellers or homeowners curious about equity."
				/>
				<InfoCard
					image={mortgage_calc}
					title="Mortgage Calculator"
					description="Calculate your monthly payments, compare interest rates, and see how different loan options fit your budget before you start shopping."
				/>
				<InfoCard
					image={market_trend}
					title="Market Trends"
					description="Explore real-time market insights, including price fluctuations, average days on market, and neighborhood comparisons to help you make informed decisions."
				/>
				<InfoCard
					image={modern_building}
					title="Modern Housing"
					description="Explore real-time market insights, including price fluctuations, average days on market, and neighborhood comparisons to help you make informed decisions."
				/>
				<InfoCard
					image={energy_efficient}
					title="Energy Efficiency & Sustainability"
					description="Explore real-time market insights, including price fluctuations, average days on market, and neighborhood comparisons to help you make informed decisions."
				/>
				<InfoCard
					image={upcoming_development}
					title="Upcoming Developments"
					description="Explore real-time market insights, including price fluctuations, average days on market, and neighborhood comparisons to help you make informed decisions."
				/>
			</div>
		</>
	);
};

export default HomePage;
