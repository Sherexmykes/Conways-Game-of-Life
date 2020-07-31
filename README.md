# Conway's Game Of Life
The Game of Life is a cellular automaton game created by John Horton Conway. It is a single person logic game where the player chooses the initial set up, rules are applied to see what happens in the next generation,and play continues to happen until one of three things happen (will be mentioned in the rules below). The game requires no input once the game has begun or initialized. The game was created in 1970 but players, programmers, and enthusiasts continue to enjoy the game, and investigate the complexities of the game. 

Cellular automata can be used to create musical and visual compositions, to generate random numbers and sequences, and to study the development of life itself. 

The game is said to be Turing-Complete (https://en.wikipedia.org/wiki/Turing_completeness) , due to using data manipulation rule sets. We also see celluar automata used today in several  when we look visual compositions, generate random numbers and sequences, and to study the development of life itself.

## Rules for the Game of Life:
1. If the cell is alive and has 2 or 3 neighbors, then it remains alive. 

2. If the cell is dead and has exactly 3 neighbors, then it comes to life. Else if remains dead. 

3. Each live cell with four or more live neighbors will die in the next generation.

## Features
1. Random button, where the player can allow the game to randomly generate patterns before pressing start.

2. The player can change the speed.

3. Custom Dark Mode feature.

## How to Install
To install this version of the game you most clone github repo and use:
```
npm install
npm start
```
Game should come up on http://localhost:3000

## Styling:
The Background is initially dodgerblue with black letters. Once in dark mode the letters will become white with a black back ground. 

```
.dark-mode {
  color: #fff;
  background-color: black;
}
```
To design the board linear-gradient was used:
```
background-image:
        linear-gradient(black 1px, transparent 1px),
        linear-gradient(90deg, black 1px, transparent 1px);
       
```
## Deployment
https://sheilasgameoflife.netlify.app/

## Built With
Create React App. Implemented with Hooks and Class Components.



## Acknowledgments
Hat tip to Brad Zickafoose and Brad Pitts for helping me with the deployment kinks.