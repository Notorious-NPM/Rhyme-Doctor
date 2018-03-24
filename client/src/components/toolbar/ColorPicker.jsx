/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */

import React from 'react';

import store from '../../redux/store';

class ColorPicker extends React.Component {
  componentDidMount() {
    this.setState(store.getState()); // eslint-disable-line
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  clickHandler = (e) => {
    console.log(e.target.style);
  }

  render() {
    return (
      <div>
        <span
          style={{
            padding: '10px',
            background: '#C62D42',
          }}
          onClick={this.clickHandler}
        />
        <span
          style={{
            padding: '10px',
            background: '#E77200',
          }}
          onClick={this.clickHandler}
        />
        <span
          style={{
            padding: '10px',
            background: '#4D8C57',
          }}
          onClick={this.clickHandler}
        />
        <span
          style={{
            padding: '10px',
            background: '#2887C8',
          }}
          onClick={this.clickHandler}
        />
        <span
          style={{
            padding: '10px',
            background: '#7070CC',
          }}
          onClick={this.clickHandler}
        />
        <span
          style={{
            padding: '10px',
            background: '#8E3179',
          }}
          onClick={this.clickHandler}
        />
      </div>
    );
  }
}

export default ColorPicker;
