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
    this.state = store.getState();
    console.log(this.state);
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  getRapPosts = async () => {
    try {
      let url = '/api/content/posts';
      if (this.props.subscription === 1) {
        url = '/api/content/friendsPosts';
      }
      const rapPosts = await axios.get(url);
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
          username={this.state.username}
        />))}
      </div>
    );
  }
}

export default RapPost;
