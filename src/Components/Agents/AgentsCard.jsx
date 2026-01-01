import React from 'react';
import styles from './AgentsCard.module.css';

const AgentsCard = ({ agents = [] }) => {
	return (
		<div className={styles.agents}>
			{/* Page Header */}
			<div className={styles.agents_header}>
				<h1>Meet Our Expert Real Estate Agents!</h1>
				<p>
					Our experienced real estate professionals are here to guide you every step
					of the way. With in-depth knowledge of the market, personalized advice, and
					a commitment to your success, we help you make informed decisions and
					invest with confidence in properties that match your goals and aspirations
				</p>
			</div>

			{/* Agent Cards */}
			<div className={styles.agents_grid}>
				{agents.map((agent) => (
					<div key={agent.id} className={styles.agent_card}>
						<img
							src={agent.image}
							alt={agent.name}
							className={styles.agent_avatar}
						/>
						<div className={styles.agent_info}>
							<h2>{agent.name}</h2>
							<h3>{agent.title}</h3>
							<div className={styles.agent_contact}>
								<a href={`tel:${agent.phone}`}>{agent.phone}</a>
								<a href={`mailto:${agent.email}`}>{agent.email}</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AgentsCard;
