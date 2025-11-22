import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">
        <b><i><span className="aya-name">AYA's</span> Haircare Online Natural Oils 🌿💆‍♀️</i></b>
      </h1>
      <div className="nav-links">
        <Link to="/products">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

