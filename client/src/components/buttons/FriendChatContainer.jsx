import React, { Component } from 'react';
import store from '../../redux/store';
import FriendChat from './FriendChat';

class FriendChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  render() {
    return (
      <div>
        {this.state.session && <FriendChat />}
      </div>
    );
  }
}

export default FriendChatContainer;
