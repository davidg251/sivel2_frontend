import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Menu = () => (
  <header className="col-25 menu-container">
    <nav>
      <ul className="menu-list">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/casos">Casos</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Menu;
