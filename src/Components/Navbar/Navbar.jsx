import React from 'react';
import './Navbar.css';
import RegisterBtn from './RegisterBtn.jsx';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<header className="header">
			<div className="navbar-outer">
				<Link to="/" className="logo">
					EliteEstates
				</Link>

				<nav className="navbar">
					<Link to="/buy">Buy</Link>
					<Link to="/rent">Rent</Link>
					<Link to="/agents">Agents</Link>
					<Link to="/about">About</Link>
					<Link to="/contacts">Contacts</Link>
				</nav>

				<Link to="/register">
					<RegisterBtn />
				</Link>
			</div>
		</header>
	);
};

export default Navbar;
