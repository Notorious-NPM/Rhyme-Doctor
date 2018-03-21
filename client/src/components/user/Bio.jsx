import React from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import API_KEY from './config';


class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }
  
  componentWillMount() {
    this.setState ({
      bio: this.props.bio
    })
    // console.log(this.props);
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  addBio = async() => {
    const status = await axios.put(
      'api/profile/bio',
      { bio: this.state.input },
    );
    this.setState ({
      bio: this.state.input
    })
  }

  render() {
    return (
      <div>
        Bio
        {!this.state.bio && (
          <div>
            <textarea 
              name="input" 
              rows="3" 
              maxLength="250" 
              placeholder="Write your bio here (max 250 characters)" 
              onChange={e => this.onChange(e)}
            />
            <br/>
            <button type="button" onClick={() => this.addBio()}>Submit</button>
          </div>)}
        {this.state.bio && (<div>{this.state.bio}</div>)}
      </div>
    );
  }
}

export default Bio;