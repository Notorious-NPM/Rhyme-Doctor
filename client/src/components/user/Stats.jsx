import React from 'react';
import axios from 'axios';

import store from '../../redux/store';

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  // componentDidMount() {
  //   this.getUserPosts();
  // }

  // getUserStats = async () => {
  //   try {
  //     const userStats = await axios.get('api/profile');
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
