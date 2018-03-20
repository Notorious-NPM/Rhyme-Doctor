import React from 'react';
import axios from 'axios';
import Comments from './comments';
import './rapPost.css';

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
    this.props.getRapPosts();
  }

  reportPost = async () => {
    try {
      const status = await axios.post(
        'http://localhost:3000/api/content/report',
        { rapPostId: this.props.rapPost.id },
      );
    } catch (err) {
      console.log('Report was already submitted');
    }
  }

  createComment = (e) => {
    this.setState({ myComment: e.target.value });
  }

  postComment = async () => {
    const status = await axios.post(
      'http://localhost:3000/api/content/comment',
      {
        text: this.state.myComment,
        username: this.props.rapPost.username,
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
        <div className="card w-50">
          <div className="card-body">
            <p><button className="btn btn-primary" onClick={() => this.likeRapPost()}>Like <span class="badge badge-light">{this.props.rapPost.like_count}</span></button></p>
            <button className="btn btn-primary" onClick={() => this.reportPost()}>Report Post</button>
            <h5 className="card-title">By {this.props.rapPost.username}</h5>
            <p className="card-text">{this.props.rapPost.text.split('\n').map(line => <div className="rap-text">{line}</div>)}</p>
            <button className="btn btn-primary" onClick={() => this.getComments()}>Show Comments</button>
          </div>
          {this.state.showComments ? <Comments
            postComment={this.postComment}
            createComment={this.createComment}
            myComment={this.state.myComment}
            comments={this.state.comments}
          /> : null}
        </div>
      </div>
    );
  }
}

export default RapPostEntry;
