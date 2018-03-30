/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */

import React from 'react';

import store from '../../redux/store';
import './colorPicker.css';

class ColorPicker extends React.Component {
  constructor() {
    super();
    this.state = {
      color1: false,
      color2: false,
      color3: false,
      color4: false,
      color5: false,
      color6: false,
      color7: false,
      color8: false,
      prevColor: null,
    };
  }

  componentDidMount() {
    this.setState(store.getState()); // eslint-disable-line
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  clickHandler = (e, tab) => {
    store.dispatch({
      type: 'changecolor',
      body: {
        color: e.target.style.backgroundColor,
      },
    });
    this.setState({
      [this.state.prevColor]: false,
    });
    this.setState({
      [tab]: true,
      prevColor: tab,
    });
  }

  render() {
    return (
      <label className="colorpicker-padding" htmlFor="colorpad">
        <div id="colorpad">
          <span
            style={{
              padding: '20px',
              background: '#C62D42',
              margin: '5px',
            }}
            className={this.state.color1 ? 'color-tab active-tab' : 'color-tab'}
            onClick={e => this.clickHandler(e, 'color1')}
          />
          <span
            style={{
              padding: '20px',
              background: '#E77200',
              margin: '5px',
            }}
            className={this.state.color2 ? 'color-tab active-tab' : 'color-tab'}
            onClick={e => this.clickHandler(e, 'color2')}
          />
          <span
            style={{
              padding: '20px',
              background: '#4D8C57',
              margin: '5px',
            }}
            className={this.state.color3 ? 'color-tab active-tab' : 'color-tab'}
            onClick={e => this.clickHandler(e, 'color3')}
          />
          <span
            style={{
              padding: '20px',
              background: '#2887C8',
              margin: '5px',
            }}
            className={this.state.color4 ? 'color-tab active-tab' : 'color-tab'}
            onClick={e => this.clickHandler(e, 'color4')}
          />
          <span
            style={{
              padding: '20px',
              background: '#7070CC',
              margin: '5px',
            }}
            className={this.state.color5 ? 'color-tab active-tab' : 'color-tab'}
            onClick={e => this.clickHandler(e, 'color5')}
          />
          <span
            style={{
              padding: '20px',
              background: '#8E3179',
              margin: '5px',
            }}
            className={this.state.color6 ? 'color-tab active-tab' : 'color-tab'}
            onClick={e => this.clickHandler(e, 'color6')}
          />
          <span
            style={{
              padding: '20px',
              background: '#93CCEA',
              margin: '5px',
            }}
            className={this.state.color7 ? 'color-tab active-tab' : 'color-tab'}
            onClick={e => this.clickHandler(e, 'color7')}
          />
          <span
            style={{
              padding: '20px',
              background: '#FBE870',
              margin: '5px',
            }}
            className={this.state.color8 ? 'color-tab active-tab' : 'color-tab'}
            onClick={e => this.clickHandler(e, 'color8')}
          />
        </div>
      </label>
    );
  }
}

export default ColorPicker;
