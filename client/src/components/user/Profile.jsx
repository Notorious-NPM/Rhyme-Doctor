import React from 'react';
import axios from 'axios';
import UserPosts from './UserPosts';
import Stats from './Stats';
import ProfileImage from './ProfileImage';
import Bio from './Bio';
import FriendButton from '../buttons/FriendButton';

import store from '../../redux/store';

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
      this.getUserData(username);
      this.getUserPosts(username);
    } else {
      this.getUserData();
      this.getUserPosts();
    }
  }

  componentDidMount() {
    this.setState(store.getState());  // eslint-disable-line
    store.subscribe(() => {
      this.setState(store.getState());
    });
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

  getUserPosts = async (username) => {
    try {
      const userPosts = username ? await axios.get('api/profile/posts', { params: { name: username } }) : await axios.get('api/profile/posts');
      this.setState({
        userPosts: userPosts.data,
      });
    } catch (err) {
      console.log('Failed to get user posts');
    }
  }

  render() {
    const { state } = this.props.location;

    return (
      <div className="filler">
        <div className="row">
          {this.state.received && <ProfileImage image={this.state.image} user={state ? state.username : this.state.user} /> /* eslint-disable-line */ }
          <div className="col-md-6">
            <Stats username={this.state.username} likeCount={this.state.likeCount} />
            {this.state.received && <Bio username={this.state.username} bio={this.state.bio} />}
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            {state && state.username !== this.state.user && <FriendButton username={state.username} /> /* eslint-disable-line */ }
          </div>
        </div>
        <UserPosts userPosts={this.state.userPosts} getUserPosts={this.getUserPosts} getUserData={this.getUserData} /> {/* eslint-disable-line */}
      </div>
    );
  }
}

export default Profile;
