import React from 'react';
import axios from 'axios';
import UserPosts from './UserPosts';
import Stats from './Stats';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      userPosts: [],
    };
  }
  componentDidMount() {
    this.getUserData();
  }

  getUserData = async () => {
    try {
      const userPosts = await axios.get('api/profile');
      this.setState({
        userPosts: userPosts.data,
      });
      console.log(this.state);
    } catch (err) {
      alert('Failed to get user posts');
    }
  }

  render() {
    return (
      <div>
        <Stats />
        <UserPosts userPosts={this.state.userPosts} />
      </div>
    );
  }
}

export default Profile;
