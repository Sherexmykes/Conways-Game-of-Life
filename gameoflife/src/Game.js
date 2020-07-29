import React from "react";
import './App.css';
import {Link} from 'react-router-dom';
import Cells from './Cells'

  


const CELL_SIZE = 20;
const WIDTH = 640;
const HEIGHT =  440;

const rows = 25;
const columns = 25;


//const operations = [
 //[0, 1],
  //[0, -1],
  //[1, -1],
  //[-1, 1],
  //[1, 1],
  //[-1, -1],
  //[1, 0],
  //[-1, 0]
//];
//Create Grid
class Grid extends React.Component {
  constructor() {
      super();
      this.rows = HEIGHT / CELL_SIZE;
      this.columns = WIDTH/ CELL_SIZE;
      this.gameboard = this.createNewBoard();
  }
  state = {
      gamecells: [],
      interval: 100,
      isEngaged: false,
      generationNum: 0
  };

  createNewBoard() {
    let gameboard = [];
    for (let y = 0; y < this.rows; y++) {
        gameboard[y] = [];
            for (let x = 0; x < this.columns; x++) {
                gameboard[y][x] = false;
            }
        }
        return gameboard;
    }
     

    createNewCells() {
    let gamecells = [];
    for (let y = 0; y < this.rows; y++) {
        for (let x = 0; x < this.columns; x++) {
        if (this.gameboard[y][x]) {
            gamecells.push({ x, y });
        }
    }
    }
        return gamecells;
    }
    getElement() {
      const rect = this.boardRef.getBoundingClientRect(); //https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp
      const doc = document.documentElement;
      
          return {
              x: rect.left + window.pageXOffset - doc.clientLeft,
              y: rect.top + window.pageYOffset - doc.clientTop
          };
      }
  
      handleClick = e => {
        const elemOffset = this.getElement();
        const offsetX = e.clientX - elemOffset.x;
        const offsetY = e.clientY - elemOffset.y;
      
        const x = Math.floor(offsetX / CELL_SIZE);
        const y = Math.floor(offsetY / CELL_SIZE);
      
        if (x >= 0 && x <= this.columns && y >= 0 && y <= this.rows) {
            this.gameboard[y][x] = !this.gameboard[y][x];
        }
            this.setState({ gamecells: this.createNewCells() });
        };
        
//Start/Stop The Game Click
        startGame = () => {
          this.setState({ isEngaged: true }, () => this.iterationMethod());
      };
      
      stopGame = () => {
          this.setState({ isEngaged: false });
          if (this.timeoutHandler) {
              window.clearTimeout(this.timeoutHandler);
              this.timeoutHandler = null;
          }
      };
     
      handleClear = () => {
        this.gameboard = this.makeNewBoard();
        this.setState({ gamecells: this.createNewCells() , generationNum: 0 });
      };

      handleRandom = () => {
        for (let y = 0; y < this.rows; y++) {
          for (let x = 0; x < this.columns; x++) {
            this.gameboard[y][x] = Math.random() >= 0.5;
          }
        }
        this.setState({ gamecells: this.createNewCells() });
      }
    
    iterationMethod = () => {
    let newGameBoard = this.createNewBoard();
    
 //lookig at the neighbors
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.columns; x++) {
      let neighbors = this.neighborsMethod(this.gameboard, x, y);
          if (this.gameboard[y][x]) {
              if (neighbors === 2 || neighbors === 3) {
                  newGameBoard[y][x] = true;
              } 
              else {
                  newGameBoard[y][x] = false;
              }
          } 
          else {
              if (!this.gameboard[y][x] && neighbors === 3) {
                  newGameBoard[y][x] = true;
          }
      }
      }
  }
  this.gameboard = newGameBoard;
  this.setState({ gamecells: this.createNewCells() });

  if (this.state.isEngaged) {
  this.timeoutHandler = window.setTimeout(() => {
      this.iterationMethod();
  }, this.state.interval);
  }
//generation
  let addGeneration = this.state.generationNum;
  ++addGeneration;
  this.setState({ generationNum: addGeneration });
  console.log(this.state.generationNum);
  }
     
    
  neighborsMethod(gameboard, x, y) {
    let neighbors = 0;
    const dirs = [[-1, -1],[-1, 0],[-1, 1],[0, 1],[1, 1],[1, 0],[1, -1],[0, -1]];
    for (let i = 0; i < dirs.length; i++) {
      const dir = dirs[i];
      let y1 = y + dir[0];
      let x1 = x + dir[1];

      if (
        x1 >= 0 &&
        x1 < this.columns &&
        y1 >= 0 &&
        y1 < this.rows &&
        gameboard[y1][x1]
      ) {
        neighbors++;
      }
    }
    return neighbors;
  }

  handleInterval = e => {
    this.setState({ interval: e.target.value });
  };

  render() {
    const { gamecells } = this.state;
    return (
      <div>
        <h1> Sheila's Game of Life</h1>
        <div><h2>Generation: {this.state.generationNum}</h2>
        <div className="speed">
          Change Every{" "}
          <input
            value={this.state.interval}
            onChange={this.handleInterval}
          />{" "}
          milliseconds
          </div>
        </div>
        <div className="container">
        <div
          className="gameBoard"
          style={{
            width: WIDTH,
            height: HEIGHT,
            backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`
          }}
          onClick={this.handleClick}
          ref={n => {
            this.boardRef = n;
          }}
        >
          {gamecells.map(gamecell => (
            <Cells x={gamecell.x} y={gamecell.y} key={`${gamecell.x}, ${gamecell.y}`} />
          ))}
        </div>

        <div className="buttons">
          {this.state.isEngaged ? (
            <button className="button" onClick={this.stopGame}>
              Stop 
            </button>
          ) : (
            <button className="button" onClick={this.startGame}>
              Start 
            </button>
          )}
          <button className="button" onClick={this.handleRandom}>
            Random
          </button>
         
          <button className="button" onClick={this.handleClear}>
            Clear
          </button>
          <div>
        <div> <Link to='/' className="WELCOME"><button className="WELCOME">Welcome</button></Link>
             <Link to='/rules'><button>Rules of the Game</button></Link>
             <Link to='/about'><button>About the Game</button></Link>
        </div>
        </div>
          
          </div>
          
        </div>
        
      </div>
    );
  }
}
export default Grid;