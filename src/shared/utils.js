export async function fetchLatestTweets(twitterHandles) {
  let tweetStorageArray = [];
  //Boiling-harbor is a Node server setup to handle the call to the Twitter API call
  const getUserTweets = handle => fetch('https://boiling-harbor-67625.herokuapp.com/twitter?name=' + handle)
    .then(res => res.json())
    .then(tweets =>  {
      tweetStorageArray = tweetStorageArray.concat(JSON.parse(tweets.data))
    })

  Promise
    .all(twitterHandles.map(getUserTweets))
    .then(() => this.setState({
      tweetData: tweetStorageArray,
      isLoaded: true
    }))
}

export async function fetchLocalStorage() {
  const config = await JSON.parse(localStorage.getItem('config'));
  //Returns defaults if local storage hasn't been set yet
  if (!config) {
    this.config = {
      background_color: 'white',
      font_color: 'black',
      number_of_tweets: 'all',
      order_of_tweets: 'newestFirst',
      month_of_tweets: 'all'
    }
  } else {
    this.config = {
      background_color: config.background_color,
      font_color: config.font_color,
      number_of_tweets: config.number_of_tweets,
      order_of_tweets: config.order_of_tweets,
      month_of_tweets: config.month_of_tweets
    }
    //Clears local storage of the edited config object
    localStorage.removeItem('config');
  }
  return;
}

export function formatTweets(order, month, limit) {
  sortTweets.call(this, order, month, limit);
  return;
}

function sortTweets(order, month, limit) {
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
    if(order === 'newestFirst') {
      return a_dateString < b_dateString ? 1 : a_dateString > b_dateString ? -1 : 0
    } else {
      return a_dateString > b_dateString ? 1 : a_dateString < b_dateString ? -1 : 0
    }
    
  });
  filterTweetsByMonth.call(this, sortedTweets, month, limit);
  return;
}

function filterTweetsByMonth(tweetArray, month, limit) {
  if (month === 'all') {
    filterNumberOfTweets.call(this, tweetArray, limit);
    return;
  } else {
    let filteredTweetArray = [];
    for (let i = 0; i < tweetArray.length; i++) {
      if (tweetArray[i].created_at.split(' ')[1] === month) {
        filteredTweetArray.push(tweetArray[i]);
      }
    }
    filterNumberOfTweets.call(this, filteredTweetArray, limit);
    return;
  }
}

function filterNumberOfTweets(tweetArray, limit) {
  if (limit === 'all') {
    this.setState({
      tweets: tweetArray
    })
    return;
  } else {
    this.setState({
      tweets: tweetArray.slice(0, limit)
    })
    return;
  }
}