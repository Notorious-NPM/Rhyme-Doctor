import React from 'react';

import Textarea from '../textarea/Textarea';
import Paragraph from '../text/Paragraph';
import store from '../../redux/store';

const centerStyle = {
  float: 'none',
  margin: '0 auto',
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  render() {
    return (
      <div className="container-fluid">
        {/* this.navSwitch() */}
        <div className="row">
          <div className="col text-center" style={centerStyle}>
            <h3>Lyrics</h3>
          </div>
        </div>
        <div className="row">
          <Textarea />
          <Paragraph className="text-center" style={centerStyle} text={this.state.text} />
        </div>
      </div>
    );
  }
}

export default Home;
