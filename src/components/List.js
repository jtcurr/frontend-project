import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const months = {
      Jan: '01',
      Feb: '02',
      Mar: '03',
      Apr: '04',
      May: '05',
      Jun: '06',
      Jul: '07',
      Aug: '08',
      Sep: '09',
      Oct: '10',
      Nov: '11',
      Dec: '12'
    }
    //Sorts Tweets in most recent Tweets first, by date
    let sortedTweets = this.props.tweets.sort((a, b) => {
      let a_dateString = '';
      a = a.created_at.split(' ');
      a[1] = months[a[1]];
      a_dateString = a[5] + a[1] + a[2];
      let b_dateString = ''
      b = b.created_at.split(' ');
      b[1] = months[b[1]];
      b_dateString = b[5] + b[1] + b[2];
      return a_dateString < b_dateString ? 1 : a_dateString > b_dateString ? -1 : 0;;
    });
  }

  render() {
    return (
      <div>
        Loading...
      </div>
    )
  }
}

export default List;