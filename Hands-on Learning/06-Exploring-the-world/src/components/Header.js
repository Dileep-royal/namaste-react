// import React from "react";
import { useState } from "react";

import { LOGO_URL } from "../utils/constants";

// Header Component
const Header =()=>{

    const [ btnName, setBtnName] = useState("Login")
    // js variable
    // const btnName ="Login";
    return (
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
                <button className="login-btn" onClick={ ()=>{  btnName ==="Login" ? setBtnName("Logout") : setBtnName("Login") }}>{btnName}</button> 
            </ul>
        </nav>
    </header>
)}
export default Header;