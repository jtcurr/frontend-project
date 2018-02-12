import React, { Component } from 'react';
import { fetchLatestTweets, fetchLocalStorage } from '../shared/utils';
import List from './List';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      tweetData: []
    }
    this.config = {};
    this.tweets = ['@Trizic', '@laughingsquid', '@techcrunch'];
    this.fetchLatestTweets = fetchLatestTweets.bind(this);
    this.fetchLocalStorage = fetchLocalStorage.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.fetchLatestTweets(this.tweets);
    this.fetchLocalStorage();
  }

  handleEdit() {
    this.props.history.push('/edit')
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div style={{'backgroundColor': this.config.background_color}}>
          <button onClick={ this.handleEdit }> Edit this page</button>
          <List tweets={ this.state.tweetData } config={ this.config }/>
        </div>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
    
  }
}

export default Home;