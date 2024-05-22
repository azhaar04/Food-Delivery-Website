import React, { useState } from "react";
import downArrow from "../../assets/down-arrow.png";
import "./header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header-container">
            <div className="header-left">
                <p className="pizza">🍕</p>
            </div>

            <div className={`header-middle ${menuOpen ? "open" : ""}`}>
                <ul className="header-menu">
                    <li className="header-menu-item">Restaurants</li>
                    <li className="header-menu-item">Recipes</li>
                    <li className="header-menu-item">About</li>
                    <li className="header-menu-item down-arrow-list">
                        Page
                        <img className="down-arrow" src={downArrow} alt="" />
                    </li>
                </ul>
            </div>

            <div className={`header-contact ${menuOpen ? "open" : ""}`}>
                <p className="header-login">Login</p>
                <button className="header-button">Sign Up</button>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                {menuOpen ? "✖" : "☰"}
            </div>
        </div>
    );
}

export default Header;
