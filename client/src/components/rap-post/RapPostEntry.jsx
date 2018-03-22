import React from 'react';
import axios from 'axios';
import Comments from './comments';
import Alert from '../alert';
import { Link } from 'react-router-dom';
import './rapPost.css';

class RapPostEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      showComments: false,
      myComment: '',
      alert: false,
      alertStatus: '',
      alertMessage: '',
      timer: undefined,
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
    try {
      const status = await axios.put(
        'http://localhost:3000/api/vote/upvote',
        { rapPostId: this.props.rapPost.id },
      );
      this.activateAlert('success', 'You liked this rap post!');
      if (this.props.onProfile) {
        this.props.getUserPosts();
        this.props.getUserData();
      } else {
        this.props.getRapPosts();
      }
    } catch (err) {
      console.log('Post was already liked');
      this.activateAlert('warning', 'Rap post was already liked');
    }
  }

  reportPost = async () => {
    try {
      const status = await axios.post(
        'http://localhost:3000/api/content/report',
        { rapPostId: this.props.rapPost.id },
      );
      this.activateAlert('success', 'Report was successfully submitted');
    } catch (err) {
      console.log('Report was already submitted');
      this.activateAlert('warning', 'Report was already submitted');
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

  activateAlert = (status, message) => {
    this.setState({
      alert: true,
      alertStatus: status,
      alertMessage: message,
    });
    if (this.state.timer) {
      clearTimeout(this.state.timer);
    }
    this.setState({
      timer: setTimeout(() => this.setState({ alert: false }), 3000),
    });
  }

  render() {
    const { username } = this.props.rapPost;

    return (
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            {this.state.alert ? <Alert message={this.state.alertMessage} status={this.state.alertStatus} /> : null}
            <p><button className="btn btn-primary" onClick={() => this.likeRapPost()}>Like <span className="badge badge-light">{this.props.rapPost.like_count}</span></button></p>
            <button className="badge badge-warning" onClick={() => this.reportPost()}>Report Post</button>
            <h5 className="card-title">
              By{' '}
              <Link to={{ pathname: '/profile', state: { username }}}>{username}</Link>
            </h5>
            <div className="rapText">
              <p className="card-text">{this.props.rapPost.text.split('\n').map(line => <div className="rap-text">{line}</div>)}</p>
            </div>
            <button className="btn btn-primary btn-space" onClick={() => this.getComments()}>Show Comments</button>
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
