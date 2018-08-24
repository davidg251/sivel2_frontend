import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Menu = () => (
  <header className="col-2 menu-container">
    <nav className="full-height">
      <ul className="menu">
        <li className="menu-item"><h2>SivelPro.beta</h2></li>
        <li className="menu-item">
          <Link to="/">Inicio</Link>
        </li>
        <li className="menu-item">
          <Link to="/casos">Casos</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Menu;
