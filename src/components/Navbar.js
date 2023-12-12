// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo-mc-sf.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-background">
        <div className="logo-container">
          <img src={logo} alt="Logo de Mi Empresa" className="logo" />
        </div>
        <div className="navbar-content">
          <div className="product-section">
            <Link to="/productos" className="nav-link">
              Productos
            </Link>
            <div className="home-section">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
