import React from 'react';
import axios from 'axios';

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
      </form>
      <div>{this.state.synonyms}
      </div>
    </div>
  );
  }
}


// Line.propTypes = {
//   line: PropTypes.string.isRequired,
//   x: PropTypes.number.isRequired,
// };

export default ThesaurusForm;
