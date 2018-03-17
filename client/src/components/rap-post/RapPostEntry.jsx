import React from 'react';
import axios from 'axios';
import Comments from './comments';

class RapPostEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      showComments: false,
      myComment: '',
    };
  }

  getComments = async (close = true) => {
    const comments = await axios.get(`http://localhost:3000/api/content/comments/${this.props.rapPost.id}`);
    if (close) {
      this.setState({
        comments: comments.data,
        showComments: !this.state.showComments,
      });
    } else {
      this.setState({
        comments: comments.data,
      });
    }
  }

  likeRapPost = async () => {
    const status = await axios.put(
      'http://localhost:3000/api/vote/upvote',
      { rapPostId: this.props.rapPost.id },
    );
    console.log(status.data);
    this.props.getRapPosts();
  }

  createComment = (e) => {
    this.setState({ myComment: e.target.value });
  }

  postComment = async () => {
    const status = await axios.post(
      'http://localhost:3000/api/content/comment',
      {
        text: this.state.myComment,
        username: this.props.rapPost.user.name,
        postId: this.props.rapPost.id,
      },
    );
    console.log(status.statusText);
    this.setState({ myComment: '' });
    this.getComments(false);
  }

  render() {
    return (
      <div>
        <p>{this.props.rapPost.text}</p>
        <br />
        <p>By {this.props.rapPost.username} | <button onClick={() => this.likeRapPost()}>Like</button> Like Count: {this.props.rapPost.like_count}</p>
        <br />
        <button onClick={() => this.getComments()}>Show Comments</button>
        {this.state.showComments ? <Comments
          postComment={this.postComment}
          createComment={this.createComment}
          myComment={this.state.myComment}
          comments={this.state.comments}
        /> : null}
      </div>
    );
  }
}

export default RapPostEntry;
