import React from 'react';
import Textarea from '../textarea/Textarea';
import ThesaurusForm from '../../components/thesaurus/ThesaurusForm';
import Paragraph from '../text/Paragraph';
import Friend from '../buttons/Friend';
import store from '../../redux/store';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div
            className="col text-center"
            style={{
              float: 'none',
              margin: '0 auto',
            }}
          ><h3>Lyrics</h3>
          </div>
        </div>
        <div className="row">
          <Textarea />
          <Paragraph
            className="text-center"
            style={{
              float: 'none',
              margin: '0 auto',
            }}
            text={this.state.text}
          />
        </div>
        <Friend />
        <br /><br />
        <ThesaurusForm />
      </div>
    );
  }
}

export default Home;
