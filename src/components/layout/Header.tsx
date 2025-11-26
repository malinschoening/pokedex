import React from 'react'
import ThemeToggle from "./ThemeToggle";
import { Link } from 'react-router-dom';

const Header: React.FC = () => {

	return (
		<header 
			className="w-100 position-fixed d-flex justify-content-between align-items-center p-3 border-bottom"
			style={{ backgroundColor: "var(--bs-body-bg)", height: '60px' }}
		>
			<Link className="text-primary text-decoration-none" to="/">Pokédex</Link>
			<ThemeToggle />
		</header>
	);
};

export default Header;
