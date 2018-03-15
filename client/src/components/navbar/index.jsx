import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="editor-navbar home-navbar">
        <ul>
          <li>Home</li>
          <li>Top/New Feeds</li>
          <li>Profile</li>
          <li>Subscriptions</li>
          <li>Logout</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
