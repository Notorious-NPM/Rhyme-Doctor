import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import ThesaurusList from './ThesaurusList.jsx';

class ThesaurusForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      synonyms: [],
    }
  }

  searchWord(e) {
    e.preventDefault();
    axios
      .get(`/api/word/synonym?word=${this.state.word}`)
      .then((res) => {
        this.setState({
          synonyms: res.data
        })
      })
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
    <div>
      <form>
        Find me a word:<br/>
        <input type="text" name="word" onChange={e => this.onChange(e)}></input><br/>
        <input type="submit" onClick={(e) => this.searchWord(e)}></input>
        <br /><br />
      </form>
      <ThesaurusList synonyms={this.state.synonyms}/>
    </div>
    );
  }
}


ThesaurusForm.propTypes = {
  synonyms: PropTypes.array.isRequired,
};

export default ThesaurusForm;
