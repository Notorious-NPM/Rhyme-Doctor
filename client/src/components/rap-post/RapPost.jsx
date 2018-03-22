import React from 'react';
import axios from 'axios';
import store from '../../redux/store.js';
import RapPostEntry from './RapPostEntry.jsx';

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
      console.log('Failed to get rap posts.');
    }
  }

  render() {
    const rapPosts = this.state.rapPosts || [];
    return (
      <div className="row">
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
