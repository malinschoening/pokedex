import React, { type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<Header />
			<main className="position-relative flex-grow-1">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
