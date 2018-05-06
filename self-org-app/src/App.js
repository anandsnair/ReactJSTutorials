import React, { Component } from 'react';
import logo from './logo.svg';
import cssClasses from './App.css';
import Layout from './containers/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className={cssClasses.App}>
        <Layout/>
      </div>
    )
  }
}

export default App;
