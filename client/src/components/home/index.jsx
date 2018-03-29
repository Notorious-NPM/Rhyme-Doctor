import React from 'react';
import $ from 'jquery';

import Textarea from '../textarea/Textarea';
import Paragraph from '../text/Paragraph';
import RhymeForm from '../rhymeSearch/RhymeForm';
import ColorPicker from '../toolbar/ColorPicker';
import store from '../../redux/store';

import location from '../../../../config';
import './home.css';

const centerStyle = {
  float: 'none',
  margin: '0 auto',
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.state.posted = false;
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentDidMount() {
    this.state = store.getState();
    console.log(this.state);
    store.dispatch({
      type: 'browserrestore',
      body: {
        username: this.state.user ? this.state.user : 'anonymous',
      },
    });
    store.subscribe(() => {
      this.setState(store.getState());
      // console.log(this.state);
    });
  }

  clickHandler = () => {
    const context = this;
    const submission = $('#lyrics').val();
    if (submission !== '') {
      const postJSON = this.makeJSONPost(submission);
      $.ajax({
        method: 'POST',
        url: '/api/content/post',
        data: {
          text: postJSON,
        },
        success(res) {
          console.log(res);
          context.setState({ posted: true });
          setTimeout(() => context.setState({ posted: false }), 5000);
        },
        error(res) {
          alert(res); // eslint-disable-line
        },
      });
    } else {
      alert('No empty posts!'); // eslint-disable-line
    }
  };

  hitHandler = () => {
    const lyrics = $('#lyrics').val();
    if (lyrics.split('\n').length < 25) {
      $.ajax({
        method: 'POST',
        url: `http://${location}:3001/parse`,
        data: {
          text: lyrics,
          strictiness: this.state.strictness,
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
    } else {
      alert('Too many words! Consider shortening your submission.'); // eslint-disable-line
    }
  };

  wipeHandler = () => {
    store.dispatch({
      type: 'wipeboard',
    });
  };

  makeJSONPost = (text) => {
    const lines = text.split('\n');
    const post = [];
    lines.forEach((line, x) => {
      const words = line.split(' ');
      words.forEach((word, y) => {
        if (`${x}, ${y}` in this.state) {
          post.push({ word, color: this.state[`${x}, ${y}`] });
        } else {
          post.push(word);
        }
      });
      post.push('\n');
    });
    post.pop(); // CHOMP
    return JSON.stringify(post);
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
    const { posted } = this.state;
    const postText = posted ? 'Posted' : 'Post';
    return (
      <div>
        <div className="jumbotron" />
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center" style={centerStyle} />
          </div>
        </div>
        <div className="row">
          <Textarea />
          <Paragraph className="text-center" style={centerStyle} text={this.state.text} />
        </div>
        <div className="row">
          <div className="col-md-6" style={{ margin: '5px' }}>
            {this.state.session ?
             'To indicate an internal rhyme, use a comma, to indicate an end rhyme, start a new line. Please avoid the use of punctuation.' /* eslint-disable-line */
             : 'Perhaps you\'d like to sign up...'}
          </div>
        </div>
        {this.state.session &&
        <div className="row">
          <div className="col-md-4">
            <button style={{ margin: '5px' }} className="btn btn-outline-primary" onClick={this.clickHandler}>{postText}</button>
            <button style={{ margin: '5px' }} className="btn btn-outline-primary" onClick={this.hitHandler}>Hit API</button>
            <button style={{ margin: '5px' }} className="btn btn-outline-primary" onClick={this.strictHandler}>{this.state.strictness}</button>
            <button style={{ margin: '5px' }} className="btn btn-outline-primary" onClick={this.wipeHandler}>Wipe Canvas</button>
          </div>
          <div className="col-md-2">
            <span />
          </div>
          <div className="col-md-4">
            {'Color Pad: '}<ColorPicker />
          </div>
        </div>}
        <hr />
        {this.state.session && <RhymeForm />}
      </div>
    );
  }
}

export default Home;
