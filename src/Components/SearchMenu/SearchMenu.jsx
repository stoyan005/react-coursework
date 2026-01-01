import { useState } from 'react';
import styles from './SearchMenu.module.css';
import SearchButton from './SearchButton';
import ContactButton from './ContactButton';
import home_video from '../../assets/photos/home_video.mp4';

const SearchMenu = () => {
	return (
		<div className={styles.search_container}>
			<div className={styles.search}>
				<video
					className={styles.search_video}
					src={home_video}
					alt="home page video"
					autoPlay
					loop
					muted
				/>
				<div className={styles.search_overlay}>
					<h2>
						Search <span>Smarter.</span> Live <span>Better.</span>
					</h2>
					<h3>
						Step into a world of exceptional homes, where comfort, style, and
						convenience come together. Explore carefully curated properties
						designed to suit your lifestyle and make your dream home a reality.
					</h3>
					<div className={styles.search_btn}>
						<a href="/buy">
							<SearchButton title="Search Properties" />
						</a>
						<a href="/contacts">
							<ContactButton title="Contact Us" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchMenu;
