import React from 'react';
import store from '../../redux/store.js';
import RapPostEntry from './RapPostEntry.jsx';
import axios from 'axios';

class RapPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.state = store.getState();
    });
    this.getRapPosts = this.getRapPosts.bind(this);
  }

  componentDidMount = () => {
    this.getRapPosts();
  }

  getRapPosts = async () => {
    try {
      const rapPosts = await axios.get('http://localhost:3000/api/content/posts');
      this.setState({
        rapPosts: rapPosts.data,
      });
    } catch (err) {
      alert('Failed to get rap posts.');
    }
  }

  render() {
    let rapPosts = this.state.rapPosts || [];
    return (
      <div align="center">
        {rapPosts.map((rapPost, i) => (<RapPostEntry
          rapPost={rapPost}
          key={i}
          getRapPosts={this.getRapPosts}
        />))}
      </div>
    );
  }
}

export default RapPost;
