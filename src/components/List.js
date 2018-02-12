import React, { Component } from 'react';
import SingleTweet from './SingleTweet';
import { formatTweets } from '../shared/utils';
import '../styles/List.css';

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
    if(this.state.tweets.length === 0) {
      return (
        <div className='errorContainer' style={{color: this.props.config.font_color, backgroundColor: this.props.config.background_color}}>
          I'm sorry, there are no tweets that match that criteria
        </div>
      )
    }
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