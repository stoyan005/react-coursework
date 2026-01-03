import React from 'react';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
	return (
		<div className={styles.container}>
			<div className={styles.about_intro}>
				<h2 className={styles.about_title}>
					A better way to <br /> find your place.
				</h2>
				<p className={styles.about_title_info}>
					We've simplified the real estate experience by focusing on clarity, local
					expertise, and honest communication.
				</p>
			</div>

			<div className={styles.feature_list}>
				<div className={styles.item}>
					<div className={styles.image_placeholder}>
						<div className={styles.image_text}>Expertise</div>
					</div>
					<div className={styles.text}>
						<h4>Knowledgeable Guidance</h4>
						<p>
							Our advisors have spent decades in the local market, ensuring you
							never overpay for the wrong location.
						</p>
					</div>
				</div>

				<div className={`${styles.item} ${styles.reverse}`}>
					<div className={styles.image_placeholder}>
						<div className={styles.image_text}>Service</div>
					</div>
					<div className={styles.text}>
						<h4>Tailored Searches</h4>
						<p>
							We don't use generic filters. We curate a selection of homes
							based on how you actually live your life.
						</p>
					</div>
				</div>

				<div className={styles.item}>
					<div className={styles.image_placeholder}>
						<div className={styles.image_text}>Trust</div>
					</div>
					<div className={styles.text}>
						<h4>Transparent Closings</h4>
						<p>
							No hidden fees or last-minute surprises. We walk you through
							every contract line by line.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
