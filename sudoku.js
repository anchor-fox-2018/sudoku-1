"use strict"

class Sudoku {
  constructor(board_string) {

  }

  solve() {}

  // Returns a string representing the current state of the board
  board() {
    let output = [];
    let count = 0;
    for(let i = 0; i < 9; i++){
      let row = [];
      for(let j = 0; j < 9; j++){
        row.push(board_string[count]);
        count++
      }
      output.push(row);
    }
    return output;
  }

  findCell(){
    let cellToCheck = [];

    // for(let i = 0; i < b)
  }
  checkHorizontal(col){
    // for(let i = 0; i <  )
  }

}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

console.log(board_string);
// Remember: this will just fill out what it can and not "guess"
game.solve()

console.log(game.board())
