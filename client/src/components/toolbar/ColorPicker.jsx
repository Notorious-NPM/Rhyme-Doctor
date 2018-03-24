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
        <span style={{
          padding: '5px',
          color: '#C62D42',
        }}
        />
        <span style={{
          padding: '5px',
          color: '#E77200',
        }}
        />
        <span style={{
          padding: '5px',
          color: '#4D8C57',
        }}
        />
        <span style={{
          padding: '5px',
          color: '#2887C8',
        }}
        />
        <span style={{
          padding: '5px',
          color: '#7070CC',
        }}
        />
        <span style={{
          padding: '5px',
          color: '#8E3179',
        }}
        />
      </div>
    );
  }
}

export default ColorPicker;
