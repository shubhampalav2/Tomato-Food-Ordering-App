// import React from 'react';
import { assets } from "../../assets/assets"
import "../../styles/NavBar.css";

const NavBar = () => {
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="Website Logo" className="logo" />
            <ul className="navbar-menu">
                <li>Home</li>
                <li>Menu</li>
                <li>Mobile App</li>
                <li>Contact Us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search Icon" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="Basket Icon" />
                    <div className="dot"></div>
                </div>
                <button>Sign In</button>
            </div>
        </div>
    )
}

export default NavBar;
