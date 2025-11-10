import React from 'react';
import './Navbar.css';
import RegisterBtn from './RegisterBtn.jsx';

const Navbar = () => {
	return (
		<>
			<header className="header">
				<a href="/" className="logo">
					EliteEstates
				</a>

				<nav className="navbar">
					<a href="/">Buy</a>
					<a href="/">Rent</a>
					<a href="/">Agents</a>
					<a href="/">About Us</a>
					<a href="/">Contacts</a>
				</nav>
				<RegisterBtn />
			</header>
		</>
	);
};

export default Navbar;
