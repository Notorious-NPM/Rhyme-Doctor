import React, { Component } from 'react';
import axios from 'axios';

class PersonalRhymes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word1: '',
      word2: '',
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: [e.target.value] });
  }

  saveRhyme() {
    axios
      .post('/api/')
  };

  render() {
    return (
      <div>
        <form onChange={e => this.handleChange(e)}>
          <input name="word1" type="text" />
          <input name="word2" type="text" />
          <button type="button" onClick={() => this.saveRhyme()}>Submit</button>
        </form>
      </div>
    );
  }
}

export default PersonalRhymes;
