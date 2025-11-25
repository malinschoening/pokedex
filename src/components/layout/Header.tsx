import React from 'react'
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {

	return (
		<header 
			className="w-100 position-fixed d-flex justify-content-between align-items-center p-3 border-bottom"
			style={{ backgroundColor: "var(--bs-body-bg)", height: '60px' }}
		>
			<div>Pokédex</div>
			<ThemeToggle />
		</header>
	);
};

export default Header;
