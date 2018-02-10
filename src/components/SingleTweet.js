import React, { Component } from 'react';

class SingleTweet extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('PROPS', this.props)
  }

  render() {
    return (
      <div>
        Loading...
      </div>
    )
  }
}

export default SingleTweet;