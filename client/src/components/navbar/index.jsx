import React from 'react';
import PropTypes from 'prop-types';

import NoSessionBar from './NoSessionBar';
import SessionBar from './SessionBar';

import store from '../../redux/store';
import './navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  render() {
    return this.state.session ? <SessionBar history={this.props.history} /> : <NoSessionBar />;
  }
}

Navbar.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line
};

export default Navbar;
