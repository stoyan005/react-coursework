import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import styles from './Navbar.module.css';
import RegisterBtn from './RegisterBtn.jsx';
import elite_logo from '../../assets/photos/elite_logo.png';

const Navbar = () => {
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [isOpen]);

	return (
		<header>
			<div className={styles.navbar_outer}>
				<Link to="/" className={styles.logo}>
					<img className={styles.logo_img} src={elite_logo} alt="Elite Logo" />
				</Link>

				<nav className={styles.navbar}>
					<Link to="/buy">Buying a Property</Link>
					<Link to="/agents">Meet Our Agents</Link>
					<Link to="/about">Why Choose EliteEstates?</Link>
					<Link to="/contacts">Contact Us</Link>
				</nav>

				<div className={styles.register_wrap}>
					<Link to="/register">
						<RegisterBtn />
					</Link>
				</div>

				<div className={styles.hamburger}>
					<Hamburger toggled={isOpen} toggle={setOpen} size={24} color="white" />
					{isOpen && (
						<div className={styles.mobile_menu}>
							<Link to="/buy" onClick={() => setOpen(false)}>
								Buying a Property
							</Link>
							<Link to="/agents" onClick={() => setOpen(false)}>
								Meet Our Agents
							</Link>
							<Link to="/about" onClick={() => setOpen(false)}>
								Why Choose EliteEstates?
							</Link>
							<Link to="/contacts" onClick={() => setOpen(false)}>
								Contact Us
							</Link>
							<Link to="/register" onClick={() => setOpen(false)}>
								<RegisterBtn />
							</Link>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Navbar;
