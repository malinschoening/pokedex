import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-light py-3 mt-auto border-top text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Malin's Pokédex. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
