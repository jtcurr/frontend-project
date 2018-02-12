import React, { Component } from 'react';
import SingleTweet from './SingleTweet';
import { sortTweets } from '../shared/utils';

class List extends Component {
  constructor(props) {
    super(props);
    this.state= {
      tweets : []
    }
    this.sortTweets = sortTweets.bind(this);
  }

  componentDidMount() {
    this.sortTweets('newestFirst');
  }

  render() {
    return (
      <div>
        <h1>
          Twitter
        </h1>
          {this.state.tweets.map((tweet, key) => {
            return (
              <div key={ key }>
                <SingleTweet tweet={ tweet } config={ this.props.config }/>
              </div>
            )
          })}
      </div>
    )
  }
}

export default List;