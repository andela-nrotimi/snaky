import React, { Component } from 'react';
import './App.css';
import Grid from './Grid';
import getNextPosition from './Path';

class App extends Component {
  constructor() {
    super();
    this.state = {
      snake: [40],
      food: 13,
      currentDirection: 'right',
      newDirection: 'right',
      score: 0,
      timer: 0,
      message:''
    };
    this.moveSnake = this.moveSnake.bind(this);
    this.startGame = this.startGame.bind(this);
    this.getKeyDirection = this.getKeyDirection.bind(this);
  }
  getKeyDirection(keycode) {
    this.setState({message : ''});
    let direction;
    let old = this.state.newDirection;
    switch (event.keyCode) {
      case 37:
        direction = 'left';
        break;
      case 38:
        direction = 'up';
        break;
      case 39:
        direction = 'right';
        break;
      case 40:
        direction = 'down';
        break;
      default:
        direction = this.state.newDirection;
        break;
    };
    this.setState({ currentDirection: old, newDirection: direction});
  }

  moveSnake() {
    const currentDirection = this.state.currentDirection;
    const newDirection = this.state.newDirection;
    const snake = this.state.snake;
    // Gets the last element in the array
    const lastPostion = snake[snake.length - 1];
    const nextPosition = getNextPosition(currentDirection, newDirection, lastPostion);
    this.updateSnake(nextPosition);
    this.setState({timer : this.state.timer + 1});
    // Checks if snake hits itself
    if ((new Set(snake)).size !== snake.length) {
      this.setState({ snake: [40],
                      food: 13,
                      currentDirection: 'right',
                      newDirection: 'right',
                      score : 0,
                      timer: null,
                      message: 'GAME OVER !'
                    });
    }
  }

  updateSnake(position) {
    const food = this.state.food;
    const snake = this.state.snake;
    snake.push(position);
    // updates the snakeHead with the most recent position
    if (position !== food) {
      snake.splice(0, 1);
    } else {
      this.replaceFood();
    }
    this.setState({ snake });
  }

  replaceFood() {
    let food;
    let found = false;
    const snake = this.state.snake;
    while (!found) {
      food = Math.floor(Math.random() * 99) + 1;
      // Checks if food is not part of the snake
      if (snake.indexOf(food) < 0) {
        found = true;
        this.setState({ food, score : this.state.score + 5
       });
      }
    }
  }

  startGame() {
    window.setInterval(() => {
      this.moveSnake();
      window.addEventListener("keydown", this.getKeyDirection, false);
    }, 500);
  }

  render() {
    const position = {
      snake: this.state.snake,
      food: this.state.food
    };
    return (
      <div className="App">
        <div className='board'>
          <h1 className="white-text"> <i className="material-icons timerId">timer</i> {this.state.timer} &nbsp; &nbsp; Score: {this.state.score} &nbsp; <p className='red-text'> {this.state.message} </p> </h1>
          <Grid {...position} />
          <a className="cyan darken-4 waves-effect waves-light startBtn" onClick={this.startGame}>START</a>
        </div>
      </div>
    );
  };
}

export default App;
