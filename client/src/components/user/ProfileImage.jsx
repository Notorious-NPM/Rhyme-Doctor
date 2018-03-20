import React from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import API_KEY from './config';


class ProfileImage extends React.Component {
  constructor() {
    super();
    this.state = {
      image: '',
      showChangePic: false,
      user: '',
    };
  }

  componentDidMount = () => {
    // get User
  }

  handleDrop = (files) => {
    const uploaders = files.map((file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('tags', 'codeinfuse, medium, gist');
      formData.append('upload_preset', 'hkhkmnpg');
      formData.append('api_key', API_KEY);
      formData.append('timestamp', (Date.now() / 1000) | 0);

      return axios.post('https://api.cloudinary.com/v1_1/dkwbeount/image/upload', formData, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      }).then((response) => {
        const data = response.data;
        const fileURL = data.secure_url;
        this.setState({
          image: fileURL,
        });
      });
    });

    axios.all(uploaders).then(() => {
      // ... perform after upload is successful operation
      console.log('done', this.state);
    });
  }

  render() {
    const url = this.state.url;
    return (
      <div>
        <Dropzone
          onDrop={this.handleDrop}
          multiple
          accept="image/*"
        >
          <p>Drop your files or click here to upload</p>
        </Dropzone>
        {/* {this.state.url && (<img src={this.state.url} />)} */}
      </div>
    );
  }
}

export default ProfileImage;
