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

  onChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  addBio = async() => {
    const status = await axios.put(
      'api/profile/bio',
      { bio: this.state.bio },
    );
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
          <div>
              <textarea 
                name="bio" 
                rows="3" 
                maxLength="250" 
                placeholder="Write your bio here (max 250 characters)" 
                onChange={e => this.onChange(e)}
              />
              <br/>
              <button type="button" onClick={() => this.addBio()}>Submit</button>
          </div>
        {/* {!this.state.bio && (
          <div>
              <textarea 
                name="bio" 
                rows="3" 
                maxLength="250" 
                placeholder="Write your bio here (max 250 characters)" 
                onChange={e => this.onChange(e)}
              />
              <br/>
              <button type="button">Submit</button>
          </div>)} */}
        {/* {this.state.image && (<img src={this.state.image} alt="sup" />)} */}
      </div>
    );
  }
}

export default Bio;