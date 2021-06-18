import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <ul className="navbar">
      <li className="navbar__item">
        <Link to="/">Main</Link>
      </li>
    </ul>
  );
}
