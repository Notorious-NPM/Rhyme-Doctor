import React from 'react';
import axios from 'axios';
import RapPostEntry from '../rap-post/RapPostEntry';

class UserPosts extends React.Component {
  constructor() {
    super();
    this.state = {
      userPosts: [],
    };
  }

  componentDidMount() {
    this.getUserPosts();
  }

  getUserPosts = async () => {
    try {
      const userPosts = await axios.get('api/profile');
      this.setState({
        userPosts: userPosts.data,
      });
    } catch (err) {
      alert('Failed to get user posts');
    }
  }

  render() {
    const userPosts = this.state.userPosts || [];
    return (
      <div align="center">
        {/* Hello */}
        {userPosts.map((userPost, i) => <RapPostEntry rapPost={userPost} key={i} />)}
      </div>
    );
  }
}

export default UserPosts;
