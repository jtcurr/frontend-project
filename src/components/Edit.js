import React, { Component } from 'react';
import '../styles/Edit.css';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      background_color: 'white',
      font_color: 'black',
      number_of_tweets: 'all',
      order_of_tweets: 'newestFirst',
      month_of_tweets: 'all'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, type) {
    this.setState({[type]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('config', JSON.stringify(this.state));
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='editFormContainer'>
        <form className='editForm' onSubmit={this.handleSubmit}>
          <div>
            <label>
              Pick your background color:
              <select value={this.state.background_color} onChange={(e)=> this.handleChange(e,'background_color')}>
                <option value='white'>white</option>
                <option value='#d1e1f9'>blue</option>
                <option value='#e6b8f9'>purple</option>
                <option value='#f2fcef'>green</option>
                <option value='#fcfaef'>yellow</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Pick your font color:
              <select value={this.state.font_color} onChange={(e)=> this.handleChange(e,'font_color')}>
                <option value='black'>black</option>
                <option value='#72716d'>grey</option>
                <option value='#6c5372'>purple</option>
                <option value='#7da37c'>green</option>
                <option value='#babc73'>yellow</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Pick your number of tweets:
              <select value={this.state.number_of_tweets} onChange={(e)=> this.handleChange(e,'number_of_tweets')}>
                <option value='all'>all </option>
                <option value='10'>10</option>
                <option value='20'>20</option>
                <option value='30'>30</option>
                <option value='40'>40</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Pick your order of tweets:
              <select value={this.state.order_of_tweets} onChange={(e)=> this.handleChange(e,'order_of_tweets')}>
                <option value='newestFirst'>newest first</option>
                <option value='oldestFirst'>oldest first</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Pick the month of tweets:
              <select value={this.state.month_of_tweets} onChange={(e)=> this.handleChange(e,'month_of_tweets')}>
                <option value='all'>all</option>
                <option value='Jan'>Jan</option>
                <option value='Feb'>Feb</option>
                <option value='Mar'>Mar</option>
                <option value='Apr'>Apr</option>
                <option value='May'>May</option>
                <option value='Jun'>Jun</option>
                <option value='Jul'>Jul</option>
                <option value='Aug'>Aug</option>
                <option value='Sep'>Sep</option>
                <option value='Oct'>Oct</option>
                <option value='Nov'>Nov</option>
                <option value='Dec'>Dec</option>
              </select>
            </label>
          </div>
          <div>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    );
  }
}

export default Edit;