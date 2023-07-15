import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="NavBar">
    <div className="heroSection">
      <h1>Surreal Estate</h1>
      <h2>Buy & Sell your home in the North-West</h2>
    </div>
    <div className="NavBarLinks">
      <Link to="/view-properties">View Properties</Link>
      <Link to="/add-properties">Add a Property</Link>
    </div>
  </div>
);

export default NavBar;
