import React from 'react';
import axios from 'axios';

class RapPostEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      showComments: false,
    };
  }

  getComments = async (rapPostId) => {
    const comments = await axios.get(`http://localhost:3000/api/content/comments/${rapPostId}`);
    this.setState({
      comments: comments.data,
      showComments: !this.state.showComments,
    });
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
        <br />
        <button onClick={this.getComments.bind(null, this.props.rapPost.id)}>Show Comments</button>
        {this.state.showComments ? this.state.comments.map((comment, i) =>
          <li key={i}>{comment.name}: {comment.text}</li>) : null}
      </div>
    );
  }
}

export default RapPostEntry;
