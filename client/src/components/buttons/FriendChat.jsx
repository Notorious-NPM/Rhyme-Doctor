import React, { Component } from 'react';
import Chat from './Chat';
import axios from 'axios';
import io from 'socket.io-client/dist/socket.io';
import store from '../../redux/store';

import './FriendChat.css';

class FriendChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsList: [],
      socket: null,
      selectedChat: null,
      store: store.getState(),
      setInactive: {},
    };
    store.subscribe(() => {
      this.state = store.getState();
    });
  }

  componentDidMount() {
    axios
      .get('/api/user/friend')
      .then(({ data }) => {
        const friendsList = [];
        data.forEach(friend =>
          friendsList.push([friend.name, friend.roomID]));
        this.setState({ friendsList }) // eslint-disable-line
      })
      .catch(err => console.log('FriendChat componentMount error: ', err));

    this.socket = io('http://localhost:3444', {
      query: {
        roomId: 'lobby',
      },
    });

    this.socket.on('server.inLobby', (payload) => {
      const domElement = document.getElementsByClassName(payload);
      if (domElement.length > 0) {
        domElement[0].style.backgroundColor = '#0EFF2E';
        const { setInactive } = this.state;
        if (setInactive[payload]) {
          clearTimeout(setInactive[payload]);
        }
        setInactive[payload] = setTimeout(() => { domElement[0].style.backgroundColor = '#bbb'; }, 20000);
        this.setState({ setInactive });
      }
    });

    this.setState( { socket: this.socket }); // eslint-disable-line
  }

  changeSelectedChat(friendName, roomID) {
    this.setState({ selectedChat: false });
    setTimeout(() => {
      this.setState({ selectedChat: [friendName, roomID] });
      document.getElementById('selectedChat').classList.remove('hide');
    }, 0);
  }

  openFriendList(e) {
    e.preventDefault();
    document.getElementById("friendList").style.height = "200px";

    const { socket } = this.state;
    socket.emit('client.inLobby', this.state.store.user);
  }

  closeFriendList() {
    document.getElementById("friendList").style.height = "0";
    this.setState({ selectedChat: false });
  }
  
  render() {
    const { friendsList, selectedChat } = this.state;

    return (
      <div>
        <div>
          <div id="friendList" className="friendList container">
            <div className="friendList minimize"><div onClick={() => this.closeFriendList()}>X{' '}</div></div>
            {friendsList.map(friend =>
              (
                <div>
                  <div className={`dot ${friend[0]}`} />
                  <div className="friend" onClick={() => this.changeSelectedChat(friend[0], friend[1])}>{friend[0]}</div>
                </div>
              ))}
          </div>
        </div>
        <div id="mySidenav" className="sidenav">
          <a href="#" onMouseEnter={e => this.openFriendList(e)}>Friends</a>
        </div>
        <br />
        {selectedChat && <Chat className="hide" friendName={selectedChat[0]} roomID={selectedChat[1]} />}
      </div>

    );
  }
}

export default FriendChat;
