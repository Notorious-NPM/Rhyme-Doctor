import React from 'react';
import $ from 'jquery';

import Textarea from '../textarea/Textarea';
import Paragraph from '../text/Paragraph';
import FriendChat from '../../components/buttons/FriendChat';
import PersonalRhymes from '../../components/buttons/PersonalRhymes';
import ThesaurusForm from '../thesaurus/ThesaurusForm';
import store from '../../redux/store';

import './home.css';

const centerStyle = {
  float: 'none',
  margin: '0 auto',
};

const clickHandler = () => {
  $.ajax({
    method: 'POST',
    url: '/api/content/post',
    data: {
      text: $('#lyrics').val(),
    },
    success(res) {
      console.log(res);
    },
    error(res) {
      alert(res); // eslint-disable-line
    },
  });
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentDidMount() {
    this.state = store.getState();
    console.log(this.state);
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  hitHandler = () => {
    const strictness = this.state.strictness === 'Strict' ? 3 : 1; // Other possible value is 'loose'.
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3001/parse',
      data: {
        text: $('#lyrics').val(),
        strictness,
      },
      success(res) {
        const colors = JSON.parse(res);
        const coords = Object.keys(colors);
        store.dispatch({ type: 'wipeboard' });
        coords.forEach((coord) => {
          store.dispatch({
            type: 'straighthighlight',
            body: {
              coord,
              color: colors[coord],
            },
          });
        });
      },
      error(res) {
        alert(res); // eslint-disable-line
      },
    });
  };

  strictHandler = () => {
    if (this.state.strictness === 'Strict') {
      store.dispatch({
        type: 'changestrictness',
        body: {
          strictness: 'Loose',
        },
      });
    } else if (this.state.strictness === 'Loose') {
      store.dispatch({
        type: 'changestrictness',
        body: {
          strictness: 'Strict',
        },
      });
    }
  };

  render() {
    return (
      <div>
      <div className="jumbotron" />
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center" style={centerStyle}>
            <h3 className="display-4">Lyrics</h3>
          </div>
        </div>
        <div className="row">
          <Textarea />
          <Paragraph className="text-center" style={centerStyle} text={this.state.text} />
        </div>
        <div className="row">
          <div className="col-md-6" style={{ margin: '5px' }}>
            Compose as you normally would. But be aware: commas signify a word to be rhymed with, as does the end of a line. { /* eslint-disable-line */ }
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <button style={{ margin: '5px' }} className="btn btn-outline-primary" onClick={clickHandler}>Post</button>
            <button style={{ margin: '5px' }} className="btn btn-outline-primary" onClick={this.hitHandler}>Hit API</button>
            <button style={{ margin: '5px' }} className="btn btn-outline-primary" onClick={this.strictHandler}>{this.state.strictness}</button>
          </div>
          {this.state.session && <FriendChat />}
          <hr />
          {this.state.session && <ThesaurusForm />}
          <hr />
          PersonalRhymes
          {this.state.session && <PersonalRhymes />}
        </div>
        {this.state.session && <FriendChat />}
        <hr />
        {this.state.session && <ThesaurusForm />}
        <hr />
        {this.state.session && <PersonalRhymes />}
      </div>
    );
  }
}

export default Home;
