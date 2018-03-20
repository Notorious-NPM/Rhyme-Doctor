import React from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';


class ProfileImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dropzone
        // onDrop={this.handleDrop}
        multiple
        accept="image/*"
        // style={styles.dropzone}
      >
        <p>Drop your files or click here to upload</p>
            </Dropzone>
    );
  }
}

export default ProfileImage;
