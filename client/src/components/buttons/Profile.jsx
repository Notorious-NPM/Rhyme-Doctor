import React from 'react';
import { Link } from 'react-router-dom';

const ProfileButton = () => (
  <Link id="profile" className="item" to="/profile">
    Profile
  </Link>
);

export default ProfileButton;
