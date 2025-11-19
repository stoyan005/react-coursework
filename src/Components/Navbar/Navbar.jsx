import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import RegisterBtn from './RegisterBtn.jsx';
import LoginBtn from './LoginBtn.jsx';
import elite_logo from '../../assets/photos/elite_logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
	const navRef = useRef();

	const toggleNavbar = () => {
		navRef.current.classList.toggle('responsive_navbar');
	};

	return (
		<header className="header">
			<div className="navbar_outer">
				<Link to="/" className="logo">
					<img className="logo_img" src={elite_logo} alt="Elite Logo" />
				</Link>

				<nav className="navbar" ref={navRef}>
					<Link to="/buy" onClick={toggleNavbar}>
						Buy
					</Link>
					<Link to="/rent" onClick={toggleNavbar}>
						Rent
					</Link>
					<Link to="/agents" onClick={toggleNavbar}>
						Agents
					</Link>
					<Link to="/about" onClick={toggleNavbar}>
						About
					</Link>
					<Link to="/contacts" onClick={toggleNavbar}>
						Contacts
					</Link>

					<button className="nav_btn nav_close_btn" onClick={toggleNavbar}>
						<FaTimes />
					</button>
				</nav>

				<div className="register_wrap">
					<Link to="/register">
						<RegisterBtn />
					</Link>
					<Link to="/login">
						<LoginBtn />
					</Link>
				</div>

				<button className="nav_btn nav_open_btn" onClick={toggleNavbar}>
					<FaBars />
				</button>
			</div>
		</header>
	);
};

export default Navbar;
