import React from 'react';
import UserPosts from './UserPosts';
import Stats from './Stats';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Stats />
        <UserPosts />
      </div>
    );
  }
}

export default Profile;
