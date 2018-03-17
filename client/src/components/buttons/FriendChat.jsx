import React, { Component } from 'react';
import Chat from './Chat';
import axios from 'axios';
import io from 'socket.io-client/dist/socket.io';

class FriendChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsList: [],
      socket: null,
      selectedChat: null,
    };
  }


  componentDidMount() {
    axios
      .get('/api/user/friend')
      .then(({ data }) => {
        const friendsList = [];
        data.forEach(friend =>{
          console.log(friend);
          console.log('hello')
          friendsList.push([friend.name, friend.roomID]);
          // friendsList.push([friend.friendID, friend.name, friend.roomID]);
        })
 
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

    // await this.socket.emit('client.enter', { userID: this.state.userID });

    this.setState({ socket: this.socket });

    // this.socket.on('server.enter', ({ userID }) => {
    //   const { friendsList } = this.state;
    //   if (friendsList[userID]) {
    //     friendsList[userID][1] = true;
    //     this.setState({ friendsList });
    //   }
    // });
  }

  changeSelectedChat(friendName, roomID) {
    this.setState({ selectedChat: false });
    setTimeout(() => this.setState({ selectedChat: [friendName, roomID] }), 0);
  }

  showState() {
    console.log(this.state);
  }

  render() {
    const { friendsList, selectedChat } = this.state;

    return (
      <div>
        <button
          type="button"
          onClick={() => this.createSocketConnection()}
          data-toggle="dropdown"
        >
          Show Friends
        </button>
        <ul>
          {friendsList.map(friend =>
            <li onClick={() => this.changeSelectedChat(friend[0], friend[1])}>{friend[0]}</li>)}
        </ul>
        <br />
        <button type="button" onClick={() => this.showState()}>Show State</button>
        <br />
        {/* <Chat /> */}
       
        {selectedChat && <Chat friendName={selectedChat[0]} roomID={selectedChat[1]} />}
      </div>

    );
  }
}

export default FriendChat;
