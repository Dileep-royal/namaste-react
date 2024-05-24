// import React from "react";

import { LOGO_URL } from "../utils/constants";

// Header Component
const Header =()=>(
    <header>
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} />
        </div>
        <nav className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </nav> 
    </header>
);

export default Header;