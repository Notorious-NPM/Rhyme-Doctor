import React, { Component } from 'react';
import io from 'socket.io-client/dist/socket.io';

import location from '../../../../config';

import('./Chat.css');

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      messages: [],
      socket: null,
      randomCode: (Math.random() * 666).toString(),
    };
  }

  async componentDidMount() {
    const { mainSocket } = this.props;
    await mainSocket.on('server.selectedChat', ({ index, user }) => {
      if (index === this.props.index && user === this.props.user) {
        const chat = document.getElementById(`show-${index}`);
        chat.classList.remove('hide');
        setTimeout(() => chat.style.width = '250px', 0);
      }
    });

    this.socket = await io(`http://${location}:3444`, {
      query: {
        roomId: this.props.roomID,
      },
    });

    await this.socket.on('server.sendMsg', ({ msg, randomCode }) => {
      if (randomCode === this.state.randomCode) {
        msg = 'Me: ' + msg;
      } else {
        msg = this.props.friendName + ': ' + msg;
      }
      this.setState({ messages: [...this.state.messages, msg] });
    });

    this.setState({ socket: this.socket }) // eslint-disable-line
  }

  sendMsg(e) {
    e.preventDefault();
    const { socket, randomCode, msg } = this.state;
    socket.emit('client.sendMsg', { msg, randomCode });
    e.target.reset();
  }

  updateMsg(e) {
    const msg = e.target.value;
    this.setState({ msg });
  }

  render() {
    const { index } = this.props;
    return (
      <div className="container selectedChat hide" id={`show-${index}`}>
        <div className="chatDisplay">
          {this.state.messages.map(msg =>
            <div>{msg}</div>)}
        </div>
        <br />
        <form onSubmit={e => this.sendMsg(e)}>
          <input type="text" onChange={e => this.updateMsg(e)} />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default Chat;
