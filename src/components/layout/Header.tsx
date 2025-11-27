import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { ChevronLeft } from "lucide-react";

const Header: React.FC = () => {
	const location = useLocation();
	const [scrolled, setScrolled] = useState(false);

	const isPokemonPage = location.pathname.startsWith("/pokemon/");

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className="w-100 position-fixed d-flex justify-content-between align-items-center p-3" style={{ height: "60px", zIndex: 1000 }}>
			{scrolled && (
				<>
					<div
						className="position-absolute top-0 start-0 w-100 h-100 bg-card"
						style={{
							opacity: 0.8,
							zIndex: 0,
						}}
					/><div
						className="position-absolute top-0 start-0 w-100 h-100"
						style={{
							backdropFilter: "blur(4px)",
							pointerEvents: "none",
							zIndex: 0,
						}}
					/>
				</>
			)}
			<div className="position-relative d-flex w-100 justify-content-between align-items-center">
				{isPokemonPage ? (
					<Link
						to="/"
						className="d-flex align-items-center text-white text-decoration-none"
						style={{ zIndex: 1 }}
					>
						<ChevronLeft size={24} className="me-2" />
						Back
					</Link>
				) : (
					<Link
						to="/"
						className="text-primary text-decoration-none fw-bold fs-5"
						style={{ zIndex: 1 }}
					>
						Pokédex
					</Link>
				)}
				<div style={{ zIndex: 1 }}>
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
};

export default Header;
