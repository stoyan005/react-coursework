import React, { useEffect, useRef, useState } from 'react';
import styles from './InfoCard.module.css';

const InfoCard = ({ image, title, description }) => {
	const cardRef = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setVisible(true);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.2 } // triggers when 20% of card is visible
		);

		if (cardRef.current) {
			observer.observe(cardRef.current);
		}

		return () => {
			if (cardRef.current) observer.unobserve(cardRef.current);
		};
	}, []);

	return (
		<div ref={cardRef} className={`${styles.search_card} ${visible ? styles.visible : ''}`}>
			<div className={styles.card_image}>
				<img src={image} alt={title} />
			</div>
			<div className={styles.card_content}>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default InfoCard;
