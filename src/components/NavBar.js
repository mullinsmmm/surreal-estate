import React from 'react';
import '../styles/NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className="NavBar">
    <img src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png" alt="logo" className="NavBarLogo" />
    <ul className="NavBarLinks">
      <li><Link to="/test">Test</Link></li>
      <li><Link to="/view-properties">View Properties</Link></li>
      <li><Link to="/add-properties">Add a Property</Link></li>
    </ul>
  </div>
);

export default NavBar;
