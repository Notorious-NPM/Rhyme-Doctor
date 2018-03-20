import React from 'react';
import axios from 'axios';
import UserPosts from './UserPosts';
import Stats from './Stats';
import ProfileImage from './ProfileImage';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      userPosts: [],
      username: '',
      likeCount: '',
      image: '',
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
      });
      console.log('state', this.state);
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
    // let pic = this.state.pic;
    return (
      <div>
        <Stats username={this.state.username} likeCount={this.state.likeCount} />
        <ProfileImage image={this.state.image} />
        <UserPosts userPosts={this.state.userPosts} getUserPosts={this.getUserPosts} getUserData={this.getUserData} />
      </div>
    );
  }
}

export default Profile;
