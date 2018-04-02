import React, { Component } from 'react';
import axios from 'axios';
import io from 'socket.io-client/dist/socket.io';
import Chat from './Chat';
import store from '../../redux/store';

import './FriendChat.css';
import location from '../../../../config';

class FriendChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsList: [],
      socket: null,
      store: store.getState(),
      setInactive: {},
      currentChatIndex: -1,
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

    this.socket = io(`https://${location}:3444`, {
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

  async changeSelectedChat(index) {
    const { socket, currentChatIndex, store } = this.state;

    if (currentChatIndex >= 0) {
      const currentChat = document.getElementById(`show-${currentChatIndex}`);
      currentChat.style.width = '0px';
      currentChat.classList.add('hide');
    }

    await socket.emit('client.selectedChat', { index, user: store.user });
    this.setState({ currentChatIndex: index });
  }

  openFriendList(e) {
    e.preventDefault();
    document.getElementById('friendList').style.height = '200px';

    const { socket } = this.state;
    socket.emit('client.inLobby', this.state.store.user);
  }

  closeFriendList() {
    document.getElementById('friendList').style.height = '0';
    const { currentChatIndex } = this.state;

    if (currentChatIndex >= 0) {
      const currentChat = document.getElementById(`show-${currentChatIndex}`);
      currentChat.style.width = '0px';
      currentChat.classList.add('hide');
      this.setState({ currentChatIndex: -1 });
    }
  }

  showState = () => {
    console.log(this.state);
  }

  render() {
    const { friendsList, socket, store } = this.state;

    return (
      <div>
        {/* <button type="button" onClick={this.showState}>*******</button> */}
        <div>
          <div id="friendList" className="friendList container">
            <div className="friendList minimize"><div onClick={() => this.closeFriendList()}>X{' '}</div></div>
            {friendsList.map((friend, index) =>
              (
                <div>
                  <div className={`dot ${friend[0]}`} />
                  <div className="friend" onClick={() => this.changeSelectedChat(index)}>{friend[0]}</div>
                </div>
              ))}
          </div>
        </div>
        <div id="mySidenav" className="sidenav">
          <a href="#" onMouseEnter={e => this.openFriendList(e)}>Friends</a>  {/*eslint-disable-line*/}
        </div>
        <br />
        {friendsList.map((friend, index) =>
          (
            <div>
              <Chat user={store.user} friendName={friend[0]} roomID={friend[1]} index={index} mainSocket={socket} />
            </div>
          ))}
      </div>
    );
  }
}

export default FriendChat;
