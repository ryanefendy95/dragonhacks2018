import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatContainer from "./containers/ChatContainer"
import NavBar from "./NavBar"
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Router history={browserHistory}>
            <Route path='/' component={NavBar}>
              <IndexRoute component={ChatContainer}/>
              <Route path='/chat' component={ChatContainer}/>
            </Route>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
