import React from 'react';
import RapPostEntry from '../rap-post/RapPostEntry';

class UserPosts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const userPosts = this.props.userPosts || [];
    return (
      <div align="center">
        {userPosts.map((userPost, i) => <RapPostEntry rapPost={userPost} key={i} getUserPosts={this.props.getUserPosts} getUserData={this.props.getUserData} onProfile />).reverse()}
      </div>
    );
  }
}

export default UserPosts;
