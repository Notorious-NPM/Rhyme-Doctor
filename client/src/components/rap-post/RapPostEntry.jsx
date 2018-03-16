import React from 'react';
import axios from 'axios';

class RapPostEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  likeRapPost = async (rapPostId, getRapPosts) => {
    const status = await axios.put('http://localhost:3000/api/vote/upvote', {rapPostId: rapPostId});
    console.log(status.data);
    getRapPosts();
  }

  render() {
    return (
      <div>
        <p>{this.props.rapPost.text}</p>
        <br />
        <p>By {this.props.rapPost.user.name} | <button onClick={this.likeRapPost.bind(null, this.props.rapPost.id, this.props.getRapPosts)}>Like</button> Like Count: {this.props.rapPost.like_count}</p>
      </div>
    );
  }
}

export default RapPostEntry;
