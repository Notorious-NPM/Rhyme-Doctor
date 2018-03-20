import React from 'react';
import axios from 'axios';
import UserPosts from './UserPosts';
import Stats from './Stats';
import ProfileImage from './ProfileImage';
import Bio from './Bio';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      userPosts: [],
      username: '',
      likeCount: '',
      image: '',
      received: false,
    };
  }
  componentWillMount() {
    this.getUserData();
    this.getUserPosts();
  }

  getUserData = async () => {
    try {
      const userData = await axios.get('api/profile');
      this.setState({
        username: userData.data.name,
        likeCount: userData.data.like_count,
        image: userData.data.image,
        received: true
      });
    } catch (err) {
      console.log('Failed to get user posts');
    }
  }

  getUserPosts = async () => {
    try {
      const userPosts = await axios.get('api/profile/posts');
      this.setState({
        userPosts: userPosts.data,
      });
    } catch (err) {
      console.log('Failed to get user posts');
    }
  }

  render() {
    return (
      <div>
        <Stats username={this.state.username} likeCount={this.state.likeCount} />
        {this.state.received ? <ProfileImage image={this.state.image} /> :null }
        <Bio />
        <UserPosts userPosts={this.state.userPosts} getUserPosts={this.getUserPosts} getUserData={this.getUserData} />
      </div>
    );
  }
}

export default Profile;
