import React from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import API_KEY from './config';
import './profile.css';

import store from '../../redux/store';

class ProfileImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      showChangePic: false,
    };
  }

  componentWillMount() {
    this.setState({
      image: this.props.image,
    });
  }

  componentDidMount() {
    this.setState(store.getState()); // eslint-disable-line
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  editPic() {
    this.setState({
      showChangePic: true,
    });
  }

  handleDrop = (files) => {
    const uploaders = files.map((file) => {
      const formData = new FormData(); // eslint-disable-line
      formData.append('file', file);
      formData.append('upload_preset', 'hkhkmnpg');
      formData.append('api_key', API_KEY);
      formData.append('timestamp', (Date.now() / 1000) || 0);

      return axios.post('https://api.cloudinary.com/v1_1/dkwbeount/image/upload', formData, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      }).then((response) => {
        const { data } = response;
        const fileURL = data.secure_url;
        axios.put('api/profile/image', { image: fileURL });
        this.setState({
          image: fileURL,
        });
      });
    });

    axios.all(uploaders).then(() => {
      this.setState({
        showChangePic: false,
      });
      console.log('done', this.state);
    });
  }

  render() {
    return (
      <div className="col-2">
        {(this.props.user === this.state.user)
          && ((!this.state.image || this.state.showChangePic)
          && (
          <Dropzone
            onDrop={this.handleDrop}
            multiple
            accept="image/*"
          >
            <p>Drop files or click to upload your profile pic</p>
          </Dropzone>))}
        {(this.state.image && !this.state.showChangePic) && (
        <div className="container-img">
          <img src={this.state.image} style={{ margin: '10px' }} alt="ProfilePic" className="image-prof" />
          {this.props.user === this.state.user &&
            <div className="middle">
              <div className="text" onClick={() => this.editPic()}>Change Picture</div>
            </div>}
        </div>
        )}
      </div>
    );
  }
}

export default ProfileImage;
