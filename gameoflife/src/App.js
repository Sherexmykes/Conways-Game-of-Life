import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Game from './Game';
import Rules from './Rules';
import Welcome from './Welcome';
import About from './About';


class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     generation: 0,
  //   }
  // }

  render() {
    return (
      <div className="App">
       
        <Route exact path = '/' component={Welcome} />
        <Route path = '/rules' component={Rules} />
        <Route path = '/about' component={About} />
        <Route path = '/gameoflife' component={Game} />
        
      </div>
    );
  }
}
export default App;