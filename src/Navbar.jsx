import React from 'react';
import {  Link } from 'react-router-dom';
import styles from './Navbar.css'

const NavBarIn = () => (
  <nav className={styles.nav}>
    <div className="container">
      <div id="navbar" className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/connect">Connect Me</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBarIn;