import React from 'react';

// import store from '../../redux/store';

class Stats extends React.Component {
  constructor(props) {
    super(props);
    // this.state = store.getState();
    // store.subscribe(() => {
    //   this.setState(store.getState());
    // });
  }
  
  render() {
    return (
      <div className="card">
        <div className="container">
          <h4><b>{this.props.username}</b></h4>
          <p>Likes: {this.props.likeCount}</p>
        </div>
      </div>
    );
  }
}

export default Stats;
