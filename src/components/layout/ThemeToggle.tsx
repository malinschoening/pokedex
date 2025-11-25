import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
        >
            <div className={`toggle-knob ${theme}`}></div>
            <Sun className="icon sun" />
            <Moon className="icon moon" />
        </button>
    );
};

export default ThemeToggle;
