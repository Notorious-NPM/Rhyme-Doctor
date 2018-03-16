import React, { Component } from 'react';
import Chat from './Chat';
import axios from 'axios';
import io from 'socket.io-client/dist/socket.io';

class FriendChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: 8,
      friendsList: {},
      socket: null,
      selectedChat: null,
    };
  }

  // Notes:
  // on click friend, create random string for user and clicked user

  componentDidMount() {
    axios
      .get(`/api/user/friend`)
      .then(({ data }) => {
        const friendsList = {};
        data.forEach((friendship) => {
          if (friendship.userID !== this.state.userID) {
            friendsList[friendship.userID] = [friendship.roomID, false];
          } else if (friendship.friendID !== this.state.userID) {
            friendsList[friendship.friendID] = [friendship.roomID, false];
          }
        });
        this.setState({ friendsList }) // eslint-disable-line
      })
      .catch(err => console.log('Friend componentMount error: ', err));
  }

  async createSocketConnection() {
    console.log('invoked createSocketConnection');
    // this connection is for everyone so we can see who is logged on to chat
    this.socket = await io('http://localhost:3444', {
      query: {
        roomId: 'main',
        title: 'friend chat',
      },
    });

    await this.socket.emit('client.enter', { userID: this.state.userID });

    this.setState({ socket: this.socket });

    this.socket.on('server.enter', ({ userID }) => {
      const { friendsList } = this.state;
      if (friendsList[userID]) {
        friendsList[userID][1] = true;
        this.setState({ friendsList });
      }
    });
  }

  changeSelectedChat(friendID, roomID) {
    this.setState({ selectedChat: [friendID, roomID] });
  }

  showState() {
    console.log(this.state);
  }

  render() {
    const { friendsList, userID, selectedChat } = this.state;

    return (
      <div>
        <button type="button" onClick={() => this.createSocketConnection()}>Show Friends</button>
        <br />
        <button type="button" onClick={() => this.showState()}>Show State</button>
        <br />
        {/* <Chat /> */}
        {Object.keys(friendsList).map(friendID =>
          <div onClick={() => this.changeSelectedChat(friendID, friendsList[friendID][0])}>{friendID}</div>)}
        {selectedChat && <Chat userID={userID} friendID={selectedChat[0]} roomID={selectedChat[1]} />}
      </div>

    );
  }
}

export default FriendChat;
