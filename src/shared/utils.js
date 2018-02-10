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