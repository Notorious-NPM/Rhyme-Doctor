import React from 'react';

import store from '../../redux/store';

const style = {
  // background: '#ffcc00',
  // padding: '50px 50px 50px 50px',
  margin: '20px 20px 20px 20px',
};

const changeHandler = (e) => {
  // console.log(e.target.value);
  store.dispatch({
    type: 'changetext',
    body: {
      text: e.target.value,
    },
  });
  // const browser = store.getState();
  // const { user } = browser;
  // delete browser.session;
  // delete browser.user;
  // localStorage.setItem(user, JSON.stringify(browser));
};

class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  render() {
    return (
      <textarea
        className="col form-control"
        id="lyrics"
        style={style}
        onChange={changeHandler}
        placeholder="Lyrics..."
        value={this.state.text}
        cols="30"
        rows="5"
      />
    );
  }
}

export default Textarea;
