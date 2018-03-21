import React, { Component } from 'react';
import axios from 'axios';

class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: false,
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
      .get('/api/user/friend', options)
      .then(({ data }) =>
        console.log(data))
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
    // const { friendsList, selectedUserID } = this.state;
    // const action = friendsList[selectedUserID] ? 'De-Friend' : 'Add Friend';

    return (
      <div>
        <button type="button" onClick={e => this.handleFriendButton(e)}>Friend</button>
      </div>
    );
  }
}

export default Friend;
