import React, { Component } from 'react';
import SingleTweet from './SingleTweet';
import { formatTweets } from '../shared/utils';

class List extends Component {
  constructor(props) {
    super(props);
    this.state= {
      tweets : []
    }
    this.formatTweets = formatTweets.bind(this);
  }

  componentDidMount() {
    this.formatTweets(this.props.config.order_of_tweets, this.props.config.month_of_tweets, this.props.config.number_of_tweets);
  }

  render() {
    return (
      <div>
        <h1 style={{color: this.props.config.font_color}}>
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