import React, { Component } from 'react';
import axios from 'axios';

class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: null,
      selectedUserID: null,
      friendsList: {
        dummyData: true,
        1: true,
        2: true,
      },
    };
  }

  componentDidMount() {
    this.setState({ userID: 3, selectedUserID: 1 }); // eslint-disable-line
  }

  handleFriendButton(e) {
    // console.log(this.state);
    let action = e.target.value;
    const { userID, selectedUserID } = this.state;
    const payload = {
      userID,
      friendID: selectedUserID,
    };

    action = action === 'De-Friend' ? 'delete' : 'post';

    axios[action]('/api/user/friend', payload)
      .then(result => console.log('result of', action, 'request is:', result))
      .catch(err => console.log(action, 'request error:', err));
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