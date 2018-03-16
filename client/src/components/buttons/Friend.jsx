import React, { Component } from 'react';
import axios from 'axios';

class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: 1,
      selectedUserID: 3,
      friendsList: {
        2: true,
      },
    };
  }

  componentDidMount() {
    // need starting userID + selectedUserID.  MB as props so they're available before this?
    axios
      .get(`/api/user/friend?userID=${1}`)
      .then(({ data }) => {
        const friendsList = {};
        data.forEach((friendship) => {
          if (friendship.userID === this.state.userID) {
            friendsList[friendship.friendID] = true;
          } else {
            friendsList[friendship.userID] = true;
          }
        });
        this.setState({ friendsList }) // eslint-disable-line
      })
      .catch(err => console.log('Friend componentMount error: ', err));
  }

  handleFriendButton(e) {
    let action = e.target.value;
    const { userID, selectedUserID } = this.state;
    let payload = {
      userID,
      friendID: selectedUserID,
    };

    action = action === 'De-Friend' ? 'delete' : 'post';
    payload = action === 'delete' ? { data: payload } : payload;

    axios[action]('/api/user/friend', payload)
      .then(result => console.log('result of ', action, ' request is: ', result))
      .catch(err => console.log(action, ' request error: ', err));

    const { friendsList } = this.state;
    if (action === 'delete') {
      delete friendsList[selectedUserID];
    }

    if (action === 'post') {
      friendsList[selectedUserID] = true;
    }

    this.setState({ friendsList });
  }

  render() {
    const { friendsList, selectedUserID } = this.state;
    const action = friendsList[selectedUserID] ? 'De-Friend' : 'Add Friend';

    return (
      <div>
        <button type="button" value={action} onClick={e => this.handleFriendButton(e)}>{action}</button>
      </div>
    );
  }
}

export default Friend;
