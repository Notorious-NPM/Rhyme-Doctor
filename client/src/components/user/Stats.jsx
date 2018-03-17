import React from 'react';
import axios from 'axios';
import 

class Stats extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     likes: '',
  //   };
  // }

  // componentDidMount() {
  //   this.getUserPosts();
  // }

  // getUserLikes = async () => {
  //   try {
  //     const userPosts = await axios.get('api/profile');
  //     this.setState({
  //       userPosts: userPosts.data,
  //     });
  //   } catch (err) {
  //     alert('Failed to get user posts');
  //   }
  // }

  render() {
    return (
      <div className="card">
        <div className="container">
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    );
  }
}

export default Stats;
