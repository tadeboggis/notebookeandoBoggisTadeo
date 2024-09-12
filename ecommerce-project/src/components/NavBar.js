import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand">Notebookeando</a>
        <ul className="navbar-nav flex-row">
          <li className="nav-item">
            <a href="/" className="nav-link">Notebooks</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">Ultrabooks</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">Accesorios</a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;

