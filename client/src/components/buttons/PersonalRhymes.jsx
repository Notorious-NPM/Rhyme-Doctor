import React, { Component } from 'react';
import axios from 'axios';

class PersonalRhymes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word1: null,
      word2: null,
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  saveRhyme(e) {
    e.preventDefault();
    const { word1, word2 } = this.state;
    if (word1 && word2) {
      const option = {
        word1,
        word2,
      };

      axios
        .post('/api/rhymes/rhyme', option)
        .then(({ data }) => console.log('saveRhyme post data: ', data))
        .catch(err => console.log('saveRhyme post error: ', err));
    }
    e.target.reset();
  }

  showState() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="personalrhymes">Personal Rhymes:{' '}<br />
            <form id="personalrhymes" className="form-group" onChange={e => this.handleChange(e)} onSubmit={e => this.saveRhyme(e)}>
              I want:{' '}
              <input name="word1" type="text" />
              {' '}to rhyme with:{' '}
              <input name="word2" type="text" />
              {' '}<button className="btn btn-outline-primary btn-sm" type="submit">Submit</button>
            </form>
          </label>
          {/* <button className="btn btn-outline-primary btn-sm" type="button" onClick={() => this.showState()}>showState</button> */} {/* eslint-disable-line */}
        </div>
      </div>
    );
  }
}

export default PersonalRhymes;
