import React from 'react';
import axios from 'axios';

class Stats extends React.Component {
  constructor() {
    super();
    this.state = {
      likes: '',
    };
  }

  componentDidMount() {
    this.getUserPosts();
  }

  getUserLikes = async () => {
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

export default Stats;
