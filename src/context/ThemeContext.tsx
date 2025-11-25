import React, { createContext, useState, useEffect, type ReactNode } from "react";

interface ThemeContextType {
	theme: "light" | "dark";
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
	theme: "light",
	toggleTheme: () => { },
});

interface Props {
	children: ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
