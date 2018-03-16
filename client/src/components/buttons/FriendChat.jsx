import React, { Component } from 'react';
import axios from 'axios';
import io from 'socket.io-client/dist/socket.io';

class FriendChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: 1,
      friendsList: {},
    };
  }

  // Notes:
  // on click friend, create random string for user and clicked user and 

  componentDidMount() {
    // upon login, nav, and click this tab, send socket to let all users know you're online
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

  createSocketConnection() {
    const roomID = (Math.floor(Math.random() * 100000)).toString();

    console.log(roomID);
    console.log(typeof roomID);

    this.socket = io('http://localhost:3444', {
      query: {
        roomId: roomID,
        title: 'friend chat',
      },
    });
  }

  showState() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.createSocketConnection()}>Show Friends</button>
        {/* <Chat /> */}
      </div>

    );
  }
}

export default FriendChat;
