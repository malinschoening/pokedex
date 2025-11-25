import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Header: React.FC = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<header className="d-flex justify-content-between align-items-center p-3 mb-4 border-bottom">
			<button
				className="btn btn-outline-primary"
				onClick={toggleTheme}
				aria-label="Toggle light/dark theme"
			>
				{theme === "light" ? "Dark Mode" : "Light Mode"}
			</button>
		</header>
	);
};

export default Header;
