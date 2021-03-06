import React, { Component } from 'react';
import { fetchLatestTweets, fetchLocalStorage } from '../shared/utils';
import List from './List';
import '../styles/Home.css';

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
        <div className='homeContainer' style={{'backgroundColor': this.config.background_color}}>
          <button className='editButton'onClick={ this.handleEdit }> Edit this page</button>
          <List tweets={ this.state.tweetData } config={ this.config }/>
        </div>
      );
    } else {
      return (
        <div className='loadingContainer'>
          Loading...
        </div>
      )
    }
    
  }
}

export default Home;