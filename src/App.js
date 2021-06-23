import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(App);
