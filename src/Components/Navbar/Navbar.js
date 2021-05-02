import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const code = '</>';
    return (
        <nav className="navbar d-flex justify-content-around align-center">
            <h2 className="roboto-condensed text-bluish">Protyasha <span className="text-coral">Roy</span><span>{code}</span></h2>
            <div className="navLinks justify-content-evenly d-flex">
                <Link to="/" className="topLinks" >Home</Link>
                <Link to="/resume" className="topLinks" >Resume</Link>
                <Link to="/projects" className="topLinks" >Projects</Link>
                <Link to="/blogs" className="topLinks" >Blogs</Link>
                <Link to="/contact" className="topLinks" >Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;