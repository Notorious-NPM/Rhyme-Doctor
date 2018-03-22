import React from 'react';
import axios from 'axios';

import ThesaurusList from './ThesaurusList';

class ThesaurusForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      synonyms: [],
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
      .get('api/word/synonym', { params: { word } })
      .then((res) => {
        this.setState({
          synonyms: res.data,
        });
      });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <form className="form-group">
            <label htmlFor="thesaurus">Thesaurus:{' '}
              <input type="text" name="word" id="thesaurus" onChange={e => this.onChange(e)} />
            </label>
            {' '}<button className="btn btn-outline-primary btn-sm" onClick={e => this.searchWord(e)}>Submit</button>
          </form>
          <ThesaurusList synonyms={this.state.synonyms} />
        </div>
      </div>
    );
  }
}

export default ThesaurusForm;
