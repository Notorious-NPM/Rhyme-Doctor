import React from 'react';

import store from '../redux/store';
import Login from './top/Login';
import Paragraph from './text/Paragraph';
// import Friend from '../components/ButtonsAndTabs/Friend';
import FriendsList from '../components/ButtonsAndTabs/FriendsList';
import Textarea from './textarea/Textarea';
import ThesaurusForm from '../components/thesaurus/ThesaurusForm';
import RapPost from './rap-post/RapPost';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  navSwitch = () => {
    if (this.state.session) {
      return (
        <div className="row center-block mx-auto">
          <div
            className="col text-center"
            style={{
              float: 'none',
              margin: '0 auto',
            }}
          ><h2>You is logged in.</h2>
          </div>
        </div>
      );
    }
    return (
      <div className="row center-block mx-auto">
        <div
          className="col-md-2 text-center"
          style={{
            float: 'none',
            margin: '0 auto',
          }}
        ><Login />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.navSwitch()}
        <div className="row">
          <div
            className="col text-center"
            style={{
              float: 'none',
              margin: '0 auto',
            }}
          ><h3>Lyrics</h3>
          </div>
        </div>
        <div className="row">
          <Textarea />
          <Paragraph
            className="text-center"
            style={{
              float: 'none',
              margin: '0 auto',
            }}
            text={this.state.text}
          />
        </div>
        {/* <Friend /> */}
        {/* <RapPost /> */}
        <br /><br />
        <ThesaurusForm />
        <FriendsList />
      </div>
    );
  }
}

export default App;
