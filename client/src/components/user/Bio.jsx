import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import store from '../../redux/store';


class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.state = store.getState();
    });
  }

  componentDidMount() {
    this.setState({
      bio: this.props.bio,
      showBio: true,
      showButton: true,
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

  editBio = (e) => {
    e.preventDefault();
    this.setState({
      showEdit: !this.state.showEdit,
      showBio: !this.state.showBio,
      showButton: !this.state.showButton,
    });
  }

  render() {
    return (
      <div>
        Bio
        {(!this.state.bio || this.state.showEdit) && (
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
        {(this.state.bio && this.state.showBio) && (<div>{this.state.bio}</div>)}
        {this.state.user === this.props.username ? <button onClick={e => this.editBio(e)}>Edit Bio</button> : null}
      </div>
    );
  }
}

Bio.propTypes = {
  bio: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Bio;
