import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from './Cell';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Snake Game </h2>
          <div className="board">
            <Cell units={this.boxArray()}/>
          </div>
        </div>
      </div>
    );
  };
  boxArray (){
    let boxes =[];
    for (let i=0; i< 100;i++) {
       boxes.push(i);
    }
    return boxes;
  };
}

export default App;
