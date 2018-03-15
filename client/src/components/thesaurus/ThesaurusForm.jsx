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
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  searchWord(e) {
    e.preventDefault();
    axios
      .get(`/api/word/synonym?word=${this.state.word}`)
      .then((res) => {
        this.setState({
          synonyms: res.data,
        });
      });
  }

  render() {
    return (
      <div>
        <form>
          Find me a word:<br />
          <input type="text" name="word" onChange={e => this.onChange(e)} /><br />
          <input type="submit" onClick={e => this.searchWord(e)} />
          <br /><br />
        </form>
        <ThesaurusList synonyms={this.state.synonyms} />
      </div>
    );
  }
}

export default ThesaurusForm;
