import React from 'react';
import axios from 'axios';
import store from '../../redux/store';


class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.state = store.getState();
    });
  }

  componentWillMount = () => {
    console.log(this.state);
    this.setState({
      bio: this.props.bio,
      showEdit: false,
    });
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  addBio = async () => {
    const status = await axios.put(
      'api/profile/bio',
      { bio: this.state.input },
    );
    this.setState({
      bio: this.state.input,
    });
  }

  // editBio = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     showEdit: !this.state.showEdit,
  //   });
  //   console.log('state', this.state);
  // }

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
            <br />
            <button type="button" onClick={() => this.addBio()}>Submit</button>
          </div>)}
        {this.state.bio && (<div>{this.state.bio}</div>)}
        {this.state.user === this.props.username ? <a>Edit Bio</a> : null}
      </div>
    );
  }
}

export default Bio;
