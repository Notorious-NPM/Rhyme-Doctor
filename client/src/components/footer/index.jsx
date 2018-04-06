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
              <li><a href="/" className="custom-a-tag">Home</a></li>
              {this.state.session && <li><a href="/feed" className="custom-a-tag">Top/New Feed</a></li>}
              {this.state.session && <li><a href="/profile" className="custom-a-tag">Profile</a></li>}
              {this.state.session && <li><a href="/" className="custom-a-tag">Subscriptions</a></li>}
              <li><a href="/about" className="custom-a-tag">About</a></li>
              <li><a href="/privacy" className="custom-a-tag">Privacy Policy</a></li>
            </ul>
          </nav>
        </footer>
      </div>
    );
  }
}

export default Footer;
