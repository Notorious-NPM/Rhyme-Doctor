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
    const { word1, word2 } = this.state;
    const option = {
      word1,
      word2,
    };

    axios
      .post('/api/rhymes/rhyme', option)
      .then(({ data }) => console.log('saveRhyme post data: ', data))
      .catch(err => console.log('saveRhyme post error: ', err));
  }

  showState() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <form onChange={e => this.handleChange(e)}>
          I want
          <input name="word1" type="text" />
          to rhyme with
          <input name="word2" type="text" />
          <button type="button" onClick={() => this.saveRhyme()}>Submit</button>
        </form>
        <button type="button" onClick={() => this.showState()}>showState</button>
      </div>
    );
  }
}

export default PersonalRhymes;
