import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => (
  <header className="col-25 menu-container">
    <nav>
      <h1>SIVEL PRO</h1>
      <ul className="menu-list">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/casos">Casos</Link>
        </li>
        <li>
          <Link to="/map">Mapa</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
