import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">devAid</div>
      <ul className="links">
        <li>About</li>
        <li>Features</li>
        <li>Docs</li>
        <li>License</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
