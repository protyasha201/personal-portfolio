import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar d-flex justify-content-around align-center">
            <h2 className="roboto-condensed text-bluish">Protyasha <span className="text-coral">Roy</span></h2>
            <div className="navLinks justify-content-evenly d-flex">
                <a className="topLinks" href="#">Home</a>
                <a className="topLinks" href="#">Resume</a>
                <a className="topLinks" href="#">Projects</a>
                <a className="topLinks" href="#">Blogs</a>
                <a className="topLinks" href="#">Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;