import React, { Component } from 'react';
import axios from 'axios';

class FriendButton extends Component {
  constructor(props) { // this.props.username
    super(props);
    this.state = {
      areFriends: false,
    };
  }

  componentDidMount() {
    const { username } = this.props;
    const options = {
      params: {
        username,
      },
    };

    axios
      .get('/api/user/checkFriendship', options)
      .then(({ data }) =>
        console.log('Friend button data: ', data))
      .catch(err => console.log('Friend componentMount error: ', err));
  }

  handleFriendButton(e) {
    let action = e.target.value;
    const { username } = this.props;
    let payload = {
      username,
    };

    action = action === 'De-Friend' ? 'delete' : 'post';
    payload = action === 'delete' ? { data: payload } : payload;

    axios[action]('/api/user/friend', payload)
      .then(({ data }) => console.log('result of ', action, ' request is: ', data))
      .catch(err => console.log(action, ' request error: ', err));

    if (action === 'delete') {
      this.setState({ areFriends: false });
    }

    if (action === 'post') {
      this.setState({ areFriends: true });
    }
  }

  render() {
    const { areFriends } = this.state;
    const action = areFriends ? 'De-Friend' : 'Add Friend';

    return (
      <div>
        <button type="button" onClick={e => this.handleFriendButton(e)}>{action}</button>
      </div>
    );
  }
}

export default FriendButton;
