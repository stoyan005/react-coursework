import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import './Navbar.css';
import RegisterBtn from './RegisterBtn.jsx';
import elite_logo from '../../assets/photos/elite_logo.png';

const Navbar = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<header>
			<div className="navbar_outer">
				<Link to="/" className="logo">
					<img className="logo_img" src={elite_logo} alt="Elite Logo" />
				</Link>

				<nav className="navbar">
					<Link to="/buy">Buy</Link>
					<Link to="/rent">Rent</Link>
					<Link to="/agents">Agents</Link>
					<Link to="/about">About</Link>
					<Link to="/contacts">Contacts</Link>
				</nav>

				<div className="register_wrap">
					<Link to="/register">
						<RegisterBtn />
					</Link>
				</div>

				<div className="hamburger">
					<Hamburger toggled={isOpen} toggle={setOpen} size={24} color="white" />
					{isOpen && (
						<div className="mobile_menu">
							<Link to="/buy" onClick={() => setOpen(false)}>
								Buy
							</Link>
							<Link to="/rent" onClick={() => setOpen(false)}>
								Rent
							</Link>
							<Link to="/agents" onClick={() => setOpen(false)}>
								Agents
							</Link>
							<Link to="/about" onClick={() => setOpen(false)}>
								About
							</Link>
							<Link to="/contacts" onClick={() => setOpen(false)}>
								Contacts
							</Link>
							<Link
								className="no_underline"
								to="/register"
								onClick={() => setOpen(false)}
							>
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
