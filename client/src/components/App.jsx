import React from 'react';

import store from '../redux/store';
import Login from './top/Login';
import Paragraph from './text/Paragraph';
import Friend from '../components/buttons/Friend';
import ThesaurusForm from '../components/thesaurus/ThesaurusForm';
import RapPost from './rap-post/RapPost.jsx';
import Navbar from './navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
      // console.log(this.state);
    });
  }

  navSwitch = () => {
    // console.log('hm');
    if (this.state.session) {
      return (
        <div>
          <h2>You is logged in.</h2>
        </div>
      );
    }
    return (
      <div>
        <Login />
      </div>
    );
  }

  render() {
    return (
      <div align="center">
        <Navbar />
        {this.navSwitch()}
        <h3>Lyrics</h3>
        <Paragraph text={this.state.text} />
        <Friend />
        <br /><br />
        <ThesaurusForm />
        <RapPost />
      </div>
    );
  }
}

export default App;
