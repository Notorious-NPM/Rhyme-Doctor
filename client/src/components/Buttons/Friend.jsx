import React, { Component } from 'react';
import axios from 'axios';
class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsList: {
        dummyData: true,
        1: true,
        2: true,
      },
    };
  }

  handleFriendButton(e) {
    let action = e.target.value;
    action === 'De-Friend' ? action = 'unfollow' : action = 'follow';

    axios
      .put(`/api/user/${action}`)
  }

  render() {
    const selectedUserId = 'dummyDat';
    let action;
    this.state.friendsList[selectedUserId] ? action = "De-Friend" : action = "Add Friend";

    return (
      <div>
          <button type="button" value={action} onClick={e => this.handleFriendButton(e)}>{action}</button>
      </div>
    );
  }
}

export default Friend;