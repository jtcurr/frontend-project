import React, { Component } from 'react';
import '../styles/SingleTweet.css';

class SingleTweet extends Component {

  constructor(props) {
    super(props);
    //Defaults link to twitter if tweet and user have not url (for older tweets)
    this.tweet_link_url = this.props.tweet.user.url ? this.props.tweet.user.url : 'https://twitter.com/'+ this.props.tweet.user.screen_name;
  }

  formatDate(dateString) {
    //Formats date in Month/Day/Year format
    let formattedString = '';
    dateString = dateString.split(' ');
    formattedString = dateString[1] + '/' + dateString[2] + '/' + dateString[5];
    return formattedString;
  }

  render() {
    return (
      <div className='listContainer' style={{color: this.props.config.font_color }}>
        <div className='tweetColumn'>
          <a href={ this.props.tweet.entities.urls.length > 0 ? this.props.tweet.entities.urls[0].url : this.tweet_link_url}>
            { this.props.tweet.text }
          </a>
          <div style={{display: this.props.tweet.entities.user_mentions.length > 0 ? null : 'none'}}>
              <ul className='mentionsList'>
              Mentions
              { this.props.tweet.entities.user_mentions.map((user, key) => {
                return (
                  <li className='mentionsItem' key={ key }>
                    <a href={'https://twitter.com/' + user.screen_name}>@{user.screen_name}</a>
                  </li>
                )
              })}
              </ul>
          </div>
        </div>
        <div className='dateColumn'>
          { this.formatDate(this.props.tweet.created_at) }
        </div>
        <div className='nameColumn'>
          { this.props.tweet.user.name }
        </div>
      <hr />
      </div>
    )
  }
}

export default SingleTweet;