import styles from './FooterInfo.module.css';

const FooterInfo = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.main_content}>
				<div className={styles.name}>
					<h3>Elite Estates</h3>
					<p>
						A luxury real estate platform helping you discover properties that
						match your lifestyle.
					</p>
					<div className={styles.footer_socials}>
						<svg
							className={styles.icon_instagram}
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
							<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
							<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
						</svg>
						<svg
							className={styles.icon_twitter}
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
						</svg>
						<svg
							className={styles.icon_facebook}
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
						</svg>
						<svg
							className={styles.icon_youtube}
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
							<path d="m10 15 5-3-5-3z" />
						</svg>
					</div>
				</div>

				<div className={styles.footer_links}>
					<h4>Platform</h4>
					<a href="/buy">Property</a>
					<a href="">Rent</a>
					<a href="/agents">Agents</a>
					<a href="/register">Register</a>
				</div>

				<div className={styles.footer_links}>
					<h4>Company</h4>
					<a href="/about">About Us</a>
					<a href="/">Careers</a>
					<a href="/">Blog</a>
					<a href="/contacts">Contact</a>
				</div>

				<div className={styles.footer_newsletter}>
					<h4>Stay Updated!</h4>
					<p>Get the latest listings and market insights!</p>
					<form>
						<input type="email" placeholder="Email addresss" />
						<button type="submit">Subscribe!</button>
					</form>
				</div>
			</div>

			<div className={styles.bottom_content}>
				<p>&copy; {new Date().getFullYear()} Elite Estates</p>
				<div>
					<a href="#">Privacy</a>
					<a href="#">Terms & Conditions</a>
				</div>
			</div>
		</footer>
	);
};

export default FooterInfo;
