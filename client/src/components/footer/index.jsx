import React from 'react';

import store from '../../redux/store';
import './footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  render() {
    return (
      <div className="footer-wrapper">
        <footer className="primary-footer group">
          <small>&copy; Rhyme Doctor</small>
          <nav className="nav">
            <ul>
              <li><a href="/">Home</a></li>
              {this.state.session && <li><a href="/feed">Top/New Feed</a></li>}
              {this.state.session && <li><a href="/profile">Profile</a></li>}
              {this.state.session && <li><a href="/">Subscriptions</a></li>}
              <li><a href="/about">About</a></li>
            </ul>
          </nav>
        </footer>
      </div>
    );
  }
}

export default Footer;
