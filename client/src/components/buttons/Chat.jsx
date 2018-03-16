import React, {Component} from 'react';
import io from 'socket.io-client/dist/socket.io';

import('./Chat.css');

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      messages: [],
      socket: null,
    };
  }

  async componentDidMount() {
    this.socket = await io('http://localhost:3444', {
      query: {
        roomId: this.props.roomID,
      },
    });

    await this.socket.on('server.sendMsg', ({ msg }) => {
      // console.log(data);
      this.setState({ messages: [...this.state.messages, msg] });
    });

    this.setState({ socket: this.socket }) // eslint-disable-line
  }

  sendMsg(e) {
    e.preventDefault();
    // this.setState({ messages: [...this.state.messages, this.state.msg] });
    const { userID } = this.props;
    const { socket } = this.state;
    let { msg } = this.state;
    msg = userID + ': ' + msg;

    socket.emit('client.sendMsg', { msg });

    e.target.reset();
  }

  updateMsg(e) {
    let msg = e.target.value;
    this.setState({ msg });
  }

  render() {
    const { room, friendID } = this.props;

    return (

      <div className="container">
        display chat here
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
    )
  }
}

export default Chat;