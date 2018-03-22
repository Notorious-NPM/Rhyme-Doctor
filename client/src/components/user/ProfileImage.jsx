import React from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import API_KEY from './config';
import './profile.css';


class ProfileImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      showChangePic: false,
      user: '',
    };
  }

  componentWillMount() {
    this.setState({
      image: this.props.image,
    });
  }

  editPic() {
    this.setState({
      showChangePic: true,
    });
  }

  handleDrop = (files) => {
    const uploaders = files.map((file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'hkhkmnpg');
      formData.append('api_key', API_KEY);
      formData.append('timestamp', (Date.now() / 1000) | 0);

      return axios.post('https://api.cloudinary.com/v1_1/dkwbeount/image/upload', formData, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      }).then((response) => {
        const data = response.data;
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
      <div>
        {(!this.state.image || this.state.showChangePic) && (<Dropzone
          onDrop={this.handleDrop}
          multiple
          accept="image/*"
        >
          <p>Drop files or click to upload your profile pic</p>
        </Dropzone>)}
        {(this.state.image && !this.state.showChangePic) && (
        <div className="container-img">
          <img src={this.state.image} alt="ProfilePic" className="image" />
          <div className="middle">
            <div className="text" onClick={() => this.editPic()}>Change Picture</div>
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default ProfileImage;
