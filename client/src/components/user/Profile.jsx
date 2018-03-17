import React from 'react';
import axios from 'axios';
import UserPosts from './UserPosts';
import Stats from './Stats';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      userPosts: [],
      username: '',
      likeCount: '',
    };
  }
  componentDidMount() {
    this.getUserData();
  }

  getUserData = async () => {
    try {
      const userData = await axios.get('api/profile');
      console.log(userData);
      // this.setState({
      //   userPosts: userData.data.rap_posts,
      //   username: userData.data.name,
      //   likeCount: userData.data.like_count,
      // });
    } catch (err) {
      console.log('Failed to get user posts');
    }
  }

  render() {
    return (
      <div>
        <Stats username={this.state.username} likeCount={this.state.likeCount} />
        <UserPosts userPosts={this.state.userPosts} />
      </div>
    );
  }
}

export default Profile;
