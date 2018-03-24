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
    this.setState({ // eslint-disable-line
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
    await axios.put(
      'api/profile/bio',
      { bio: this.state.input },
    );
    this.setState({
      bio: this.state.input,
      showEdit: false,
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
      <div className="row">
        <label htmlFor="bioedit">About Me{' ' /* eslint-disable-line */ }
          {(this.state.user === this.props.username) &&
            ((!this.state.bio || this.state.showEdit) && (
            <div id="bioedit" className="row" style={{ margin: '10px' }}>
              <textarea
                className="form-control"
                style={{ margin: '10px' }}
                name="input"
                rows="3"
                maxLength="250"
                placeholder="Write your bio here (max 250 characters)"
                onChange={e => this.onChange(e)}
              />
              <button className="btn btn-outline-primary" onClick={() => this.addBio()}>Submit</button>
            </div>))}
        </label>
        {(this.state.bio || this.state.showBio) && (<div className="row">{this.state.bio}</div>)}<br /><br />
        {this.state.user === this.props.username && this.state.bio ? <button className="btn btn-outline-primary" onClick={e => this.editBio(e)}>Edit Bio</button> : null}
      </div>
    );
  }
}

Bio.propTypes = {
  bio: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Bio;
