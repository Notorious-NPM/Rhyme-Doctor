import React, { Component } from 'react';
import Chat from './Chat';
import axios from 'axios';
import io from 'socket.io-client/dist/socket.io';

import './FriendChat.css';

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
          friendsList.push([friend.name, friend.roomID]);
        })
 
        this.setState({ friendsList }) // eslint-disable-line
      })
      .catch(err => console.log('Friend componentMount error: ', err));
  }

  changeSelectedChat(friendName, roomID) {
    this.setState({ selectedChat: false });
    setTimeout(() => {
      this.setState({ selectedChat: [friendName, roomID] });
      document.getElementById('selectedChat').classList.remove('hide');
    }, 0);
  }

  showState() {
    console.log(this.state);
  }

  openFriendList(e) {
    e.preventDefault();
    document.getElementById("friendList").style.height = "200px";
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
            <div className="friendList minimize"><div onClick={() => this.closeFriendList()}>X</div></div>
            {friendsList.map(friend =>
              (
                <div>
                  <div className="dot" />
                  <div className="friend" onClick={() => this.changeSelectedChat(friend[0], friend[1])}>{friend[0]}</div>
                </div>
              ))}
          </div>
        </div>
        <div id="mySidenav" className="sidenav">
          <a href="#" onMouseEnter={e => this.openFriendList(e)}>Friends</a>
        </div>
        ************
        <br />
        <br />
        <button type="button" onClick={() => this.showState()}>Show State</button>
        <br />
        {selectedChat && <Chat className="hide" friendName={selectedChat[0]} roomID={selectedChat[1]} />}
      </div>

    );
  }
}

export default FriendChat;
