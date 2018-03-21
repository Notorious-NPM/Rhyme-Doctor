import React from 'react';
import axios from 'axios';
import UserPosts from './UserPosts';
import Stats from './Stats';
import ProfileImage from './ProfileImage';
import Bio from './Bio';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userPosts: [],
      username: '',
      likeCount: '',
      image: '',
      bio: '',
      received: false,
    };
  }
  componentWillMount() {
    if (this.props.location.state) {
      const { username } = this.props.location.state;
      console.log('*** reached Profile.jsx CWM: ', username);
      this.getUserData(username);
      this.getUserPosts();
    } else {
      console.log('*** reached Profile.jsx else');
      this.getUserData();
      this.getUserPosts();
    }
  }

  getUserData = async (username) => {
    try {
      const userData = username ? await axios.get('api/profile', { params: { name: username } }) : await axios.get('api/profile');
      this.setState({
        username: userData.data.name,
        likeCount: userData.data.like_count,
        image: userData.data.image,
        bio: userData.data.bio,
        received: true,
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
        {this.state.received ? <Bio username={this.state.username} bio={this.state.bio}/> :null }
        <UserPosts userPosts={this.state.userPosts} getUserPosts={this.getUserPosts} getUserData={this.getUserData} />
      </div>
    );
  }
}

export default Profile;
