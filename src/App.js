import './reset.css'
import './App.css';
import React, { Component } from 'react';

import Landing from './components/Landing'


import {Switch, Route} from 'react-router-dom'
import {HashRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Landing/>
          
        </div>

      </HashRouter>
    );
  }
}

export default App;
