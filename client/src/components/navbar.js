import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">Main</Link>
      </li>
    </ul>
  );
}
