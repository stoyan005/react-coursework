import React from 'react';
import michael from '../assets/photos/michael.jpg';
import sarah from '../assets/photos/sarah.jpg';
import rachel from '../assets/photos/rachel.jpg';
import david from '../assets/photos/david.jpg';
import sophia from '../assets/photos/sophia.jpg';
import drew from '../assets/photos/drew.jpg';
import olivia from '../assets/photos/olivia.jpg';
import geri from '../assets/photos/geri.jpg';
import ethan from '../assets/photos/ethan.jpg';
import AgentsCard from '../Components/Agents/AgentsCard';

const AgentsPage = () => {
	const agents = [
		{
			id: 1,
			name: 'Sarah Johnson',
			title: 'Senior Real Estate Agent',
			phone: '+44 7712 334455',
			email: 'sarah@elitestates.com',
			image: sarah,
		},
		{
			id: 2,
			name: 'Michael Brown',
			title: 'Luxury Property Specialist',
			phone: '+44 7801 112233',
			email: 'michael@elitestates.com',
			image: michael,
		},
		{
			id: 3,
			name: 'Rachel Drone',
			title: 'Luxury Property Specialist',
			phone: '+44 7523 456789',
			email: 'rachel@elitestates.com',
			image: rachel,
		},
		{
			id: 4,
			name: 'David Stone',
			title: 'Commercial Real Estate Expert',
			phone: '+44 7700 987654',
			email: 'david@elitestates.com',
			image: david,
		},
		{
			id: 5,
			name: 'Sophia Lane',
			title: 'Residential Property Consultant',
			phone: '+44 7911 234567',
			email: 'sophia@elitestates.com',
			image: sophia,
		},
		{
			id: 6,
			name: 'Drew Reed',
			title: 'Investment Property Advisor',
			phone: '+44 7965 998877',
			email: 'drew@elitestates.com',
			image: drew,
		},
		{
			id: 7,
			name: 'Olivia Clarke',
			title: 'Luxury Property Specialist',
			phone: '+44 7712 445566',
			email: 'olivia@elitestates.com',
			image: olivia,
		},
		{
			id: 8,
			name: 'Ethan Morgan',
			title: 'Residential Sales Expert',
			phone: '+44 7801 223344',
			email: 'ethan@elitestates.com',
			image: ethan,
		},
		{
			id: 9,
			name: 'Geri Bennett',
			title: 'Commercial Real Estate Consultant',
			phone: '+44 7523 667788',
			email: 'geri@elitestates.com',
			image: geri,
		},
	];

	return (
		<main>
			<AgentsCard agents={agents} />
		</main>
	);
};

export default AgentsPage;
