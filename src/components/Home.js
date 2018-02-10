import React, { Component } from 'react';
import { fetchLatestTweets } from '../shared/utils';
import List from './List';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      tweetData: []
    }
    this.tweets = ['@Trizic', '@laughingsquid', '@techcrunch'];
    this.fetchLatestTweets = fetchLatestTweets.bind(this);
  }

  componentDidMount() {
    this.fetchLatestTweets(this.tweets);
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <List tweets={ this.state.tweetData }/>
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