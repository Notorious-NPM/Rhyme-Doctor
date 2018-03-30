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
      <div>
        <div className="solid-block-top">Color Pad:</div>
        <label className="colorpicker-padding" htmlFor="colorpad">
          <div id="colorpad">
            <span
              style={{
                background: '#C62D42',
              }}
              className={this.state.color1 ? 'color-tab-effect' : 'color-tab'}
              onClick={e => this.clickHandler(e, 'color1')}
            />
            <span
              style={{
                background: '#E77200',
              }}
              className={this.state.color2 ? 'color-tab-effect' : 'color-tab'}
              onClick={e => this.clickHandler(e, 'color2')}
            />
            <span
              style={{
                background: '#4D8C57',
              }}
              className={this.state.color3 ? 'color-tab-effect' : 'color-tab'}
              onClick={e => this.clickHandler(e, 'color3')}
            />
            <span
              style={{
                background: '#2887C8',
              }}
              className={this.state.color4 ? 'color-tab-effect' : 'color-tab'}
              onClick={e => this.clickHandler(e, 'color4')}
            />
            <span
              style={{
                background: '#7070CC',
              }}
              className={this.state.color5 ? 'color-tab-effect' : 'color-tab'}
              onClick={e => this.clickHandler(e, 'color5')}
            />
            <span
              style={{
                background: '#8E3179',
              }}
              className={this.state.color6 ? 'color-tab-effect' : 'color-tab'}
              onClick={e => this.clickHandler(e, 'color6')}
            />
            <span
              style={{
                background: '#93CCEA',
              }}
              className={this.state.color7 ? 'color-tab-effect' : 'color-tab'}
              onClick={e => this.clickHandler(e, 'color7')}
            />
            <span
              style={{
                background: '#FBE870',
              }}
              className={this.state.color8 ? 'color-tab-effect' : 'color-tab'}
              onClick={e => this.clickHandler(e, 'color8')}
            />
          </div>
        </label>
        <div className="solid-block-bottom" />
      </div>
    );
  }
}

export default ColorPicker;
