import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Alert from '../alert';
import Modal from '../modal';
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
      likes: this.props.rapPost.like_count,
      hidden: true,
    };
  }

  getComments = async (close = true) => {
    const comments = await axios.get(`/api/content/comments/${this.props.rapPost.id}`);
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
      await axios.put(
        '/api/vote/upvote',
        { rapPostId: this.props.rapPost.id },
      );
      this.activateAlert('success', 'You liked this rap post!');
      if (this.props.onProfile) {
        this.props.getUserPosts();
        this.props.getUserData();
      } else {
        this.setState({ likes: this.state.likes + 1 });
      }
    } catch (err) {
      console.log('Post was already liked');
      this.activateAlert('warning', 'Rap post was already liked');
    }
  }

  reportPost = async () => {
    try {
      await axios.post(
        '/api/content/report',
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
      '/api/content/comment',
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

  triggerModal = () => {
    this.setState({
      hidden: !this.state.hidden,
    });
    this.getComments();
  }

  parseText = (jsonString) => {
    const rapObj = JSON.parse(jsonString);
    const rapText = rapObj.map((word) => {
      if (typeof word === 'object') {
        return <span style={{ color: word.color }}>{`${word.word} `}</span>;
      } else if (word === '\n') {
        return <br />;
      }
      return <span>{`${word} `}</span>;
    });

    return rapText;
  }

  render() {
    const rapText = this.parseText(this.props.rapPost.text);
    const { username } = this.props.rapPost;
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            {this.state.alert ? <Alert message={this.state.alertMessage} status={this.state.alertStatus} /> : null} {/* eslint-disable-line*/}
            <p><button className="btn btn-primary" onClick={() => this.likeRapPost()}>Like <span className="badge badge-light">{this.state.likes}</span></button></p>
            <button className="badge badge-warning" onClick={() => this.reportPost()}>Report Post</button>
            <h5 className="card-title">
              By{' '}
              <Link to={{ pathname: '/profile', state: { username }}}>{username}</Link> {/* eslint-disable-line */}
            </h5>
            <div className="hover-card">
              <div className="rapText" onClick={() => this.triggerModal()}>
                <div className="middle">
                  <div className="hidden-text">Click to expand</div>
                </div>
                <div className="hover-effect">
                  <p className="card-text rap-text">{rapText}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <Modal
          name={username}
          rapText={rapText}
          hidden={this.state.hidden}
          triggerModal={this.triggerModal}
          comments={this.state.comments}
          postComment={this.postComment}
          createComment={this.createComment}
          myComment={this.state.myComment}
          image={this.props.rapPost.image}
        />
      </div>
    );
  }
}

export default RapPostEntry;
