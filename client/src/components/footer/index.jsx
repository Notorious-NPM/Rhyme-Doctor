import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer className="primary-footer group">

        <small>&copy; Rhyme Doctor</small>

        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/feed">Top/New Feed</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/">Subscriptions</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>

      </footer>
    </div>
  );
};

export default Footer;
