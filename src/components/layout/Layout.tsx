import React, { type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<Header />
			<main className="position-relative flex-grow-1">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
