import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Edit from '../components/Edit';

export default () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/edit' component={Edit}/>
    </Switch>
  </Router>
)