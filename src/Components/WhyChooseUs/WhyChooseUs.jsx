import React from 'react';
import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
	return (
		<div className={styles.container}>
			<div className={styles.about_intro}>
				<h2 className={styles.about_title}>Why Choose Us?</h2>
				<p className={styles.about_title_info}>
					We've simplified the real estate experience by focusing on clarity, local
					expertise, and honest communication—so every step feels straightforward and
					stress-free.
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
							Our advisors have spent decades working in the local market,
							building deep relationships and an instinctive understanding of
							what truly makes a location valuable. This experience allows us
							to spot overpriced areas instantly, steer you away from hidden
							pitfalls, and make sure every purchase is grounded in long-term
							value—not hype.
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
							We don't rely on generic filters or tick-box searches. Instead,
							we curate a thoughtful selection of homes based on how you
							actually live your life—your routines, priorities, and the spaces
							that matter most to you.
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
							There are no hidden fees or last-minute surprises. We take the
							time to walk you through every contract, line by line, making
							sure everything is clear and comfortable before you move forward.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
