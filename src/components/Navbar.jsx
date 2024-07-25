import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Updated path

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/quotes">Quotes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
