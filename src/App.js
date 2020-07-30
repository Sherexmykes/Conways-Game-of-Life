import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Game from './Game';
import Rules from './Rules';
import Welcome from './Welcome';
import About from './About';
import DarkNavBar from './DarkNav'

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
       
       <Route exact path = '/' component={Welcome} />
       <Route path = '/rules' component={Rules} />
        <Route path = '/about' component={About} />
        <Route path = '/gameoflife' component={Game} />
        <h3>Dark Mode</h3>
       <DarkNavBar/>
        
      </div>
    );
  }
}
export default App;