import React from 'react';
import axios from 'axios';

import RhymeList from './RhymeList';

class RhymeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      rhymes: [],
    };
  }

  onChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  searchWord(e) {
    const { word } = this.state;
    e.preventDefault();
    axios
      .get('api/word/rhyme', { params: { word } })
      .then((res) => {
        this.setState({
          rhymes: res.data,
        });
      });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <form className="form-group">
            <label htmlFor="rhyme">Find a Rhyme:{' '}
              <input type="text" name="word" id="rhyme" onChange={e => this.onChange(e)} />
            </label>
            {' '}<button className="btn btn-outline-primary btn-sm" onClick={e => this.searchWord(e)}>Submit</button>
          </form>
          <RhymeList rhymes={this.state.rhymes} />
        </div>
      </div>
    );
  }
}

export default RhymeForm;
