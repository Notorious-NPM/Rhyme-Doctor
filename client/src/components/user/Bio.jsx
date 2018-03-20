import React from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import API_KEY from './config';


class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: '',
    };
  }

  // componentWillMount() {
  //   this.setState ({
  //     image: this.props.image
  //   })
  // }

  render() {
    return (
      <div>
        Bio
        {!this.state.bio && (
          <div>
              <textarea rows="3" maxlength="250" placeholder="Write your bio here (max 250 characters)"></textarea>
          </div>)}
        {/* {this.state.image && (<img src={this.state.image} alt="sup" />)} */}
      </div>
    );
  }
}

export default Bio;
