import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: 1,
      friendsList: {},
    };
  }

  componentDidMount() {
    // axios request & algorithum to determine which friend is online
    // make use of sockets to determine when last action was taken
    // setstate with true/false and render
    axios
      .get(`/api/user/friend?userID=${1}`)
      .then(({ data }) => {
        const friendsList = {};
        data.forEach((friendship) => {
          if (friendship.userID === this.state.userID) {
            friendsList[friendship.friendID] = false;
          } else {
            friendsList[friendship.userID] = false;
          }
        });
        this.setState({ friendsList }) // eslint-disable-line
      })
      .catch(err => console.log('Friend componentMount error: ', err));
  }

  showState() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.showState()}>*********</button>
        {/* <Chat /> */}
      </div>

    );
  }
}

export default FriendsList;
