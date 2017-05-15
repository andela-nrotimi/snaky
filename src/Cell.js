import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Cell extends React.Component{
  constructor(props){
    super(props);
    this.startGame = this.startGame.bind(this);
    this.getKeyDirection = this.getKeyDirection.bind(this);
    this.state = {  color : 'white',
                    snakeHead: [0,1],
                    direction: '',
                    foodPosition: 50,
                    score: 0,
                    tail: [],
                    total: 0,
                    timer: 0
                  };
  }
  getKeyDirection(event){
     switch(event.keyCode){
        case 37:
          this.setState({direction :'left',
          snakeHead: this.state.snakeHead-1});
          break;
        case 38:
          this.setState({direction :'up',
          snakeHead: this.state.snakeHead-10});
          break;
        case 39:
          this.setState({direction :'right',
          snakeHead: this.state.snakeHead+1});
          break;
        case 40:
          this.setState({direction :'down',
          snakeHead: this.state.snakeHead+10});
          break;
      }
  }

  startGame(){
    window.setInterval(() =>{
      if (this.state.snakeHead >= 0 && this.state.snakeHead < 99) {
        this.setState({snakeHead: this.state.snakeHead+1});
        this.setState({timer: this.state.timer + 1});
        window.addEventListener("keydown",this.getKeyDirection , false);
      } else {
        this.setState({snakeHead: 0});
      }
      if (this.state.snakeHead === this.state.foodPosition) {
        this.setState({foodPosition: Math.floor(Math.random() * 99) + 1});
        this.setState({score: this.state.score + 5});
      }
    },500);
    this.setState({color: 'purple'});
  }
  render(){
    let boxes=this.props.units;
    return (
      <div>
       <h1> <i className="material-icons timerId">timer</i> {this.state.timer} &nbsp; &nbsp; Score: {this.state.score} </h1>
        <div>
          { boxes.map((box,index)=>{
              if (index === this.state.foodPosition){
                return  <div className="col s2 gameCell red darken-1" key={index} id={'cellId'+index}> {index} </div>
              }
              else if (index === this.state.snakeHead){
                return  <div className="col s2 gameCell light-blue darken-4" key={index} id={'cellId'+index}> {index} </div>
              }
              else {
                return  <div className="col s2 gameCell teal lighten-3" key={index} id={'cellId'+index}> {index} </div>
              }
          })
          }
          <a className="cyan darken-4 waves-effect waves-light board startBtn" onClick={this.startGame}><i className="material-icons powerId">power_settings_new</i></a>
        </div>
      </div>
    );
  }
}

export default Cell;
