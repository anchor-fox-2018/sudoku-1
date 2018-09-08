"use strict"

class Sudoku {
  constructor(board_string) {
  }

  solve() {
    let board = game.board();
    // for(let i = 0; i < this.findCell().length; i++){
    //   for(let i)
    // }
  }

  findBlock(row, col){
    let board = game.board();
    let numBlock = []
    if(row < 3){
      if(col < 3){
        for(let i = 0; i < 3; i++){
          for(let j = 0; j < 3; j++){
            numBlock.push(board[i][j]);
          }
        }
      } else if(col < 6){
        for(let i = 0; i < 3; i++){
          for(let j = 3; j < 6; j++){
            numBlock.push(board[i][j]);
          }
        }
      } else if(col < 9){
        for(let i = 0; i < 3; i++){
          for(let j = 6; j < 9; j++){
            numBlock.push(board[i][j]);
          }
        }
      }
    } else if(row < 6){
      if(col < 3){
        for(let i = 3; i < 6; i++){
          for(let j = 0; j < 3; j++){
            numBlock.push(board[i][j]);
          }
        }
      } else if(col < 6){
        for(let i = 3; i < 6; i++){
          for(let j = 3; j < 6; j++){
            numBlock.push(board[i][j]);
          }
        }
      } else if(col < 9){
        for(let i = 3; i < 6; i++){
          for(let j = 6; j < 9; j++){
            numBlock.push(board[i][j]);
          }
        }
      }
    } else if(row < 9){
      if(col < 3){
        for(let i = 6; i < 9; i++){
          for(let j = 0; j < 3; j++){
            numBlock.push(board[i][j]);
          }
        }
      } else if(col < 6){
        for(let i = 6; i < 9; i++){
          for(let j = 3; j < 6; j++){
            numBlock.push(board[i][j]);
          }
        }
      } else if(col < 9){
        for(let i = 6; i < 9; i++){
          for(let j = 6; j < 9; j++){
            numBlock.push(board[i][j]);
          }
        }
      }
    }
    return numBlock;
  }
  
  checkBlockCell(block, numToCheck){
    let check = true;
    for (let i = 0; i < block.length; i++){
      if(block[i] === numToCheck){
        check = false;
      }
    }
    return check;
  }

  // Returns a string representing the current state of the board
  board() {
    let output = [];
    let count = 0;
    for(let i = 0; i < 9; i++){
      let row = [];
      for(let j = 0; j < 9; j++){
        row.push(Number(board_string[count]));
        count++
      }
      output.push(row);
    }
    return output;
  }

  findCell(){
    var cellToCheck = [];
    let board = game.board();
    // console.log(board);
    for(let i = 0; i < 9 ; i++){
      let row = [];
      for(let j = 0; j < 9; j++){
        if(board[i][j] === 0){
          row.push(j);
        }
      }
      cellToCheck.push(row);
    }
    return cellToCheck;
  }
  checkHorizontal(row, numToCheck){
    let rowToCheck = game.board()[row]
    let check = true;
    for(let i = 0; i < rowToCheck.length; i++){
      if(rowToCheck[i] === numToCheck){
        check = false;
      }
    }
    return check;
  }

  checkVertical(col, numToCheck){
    let colToCheck = [];
    for(let i = 0; i < 9; i++){
      colToCheck.push(game.board()[i][col]);
    }
    
    let check = true;
    for(let i = 0; i < colToCheck.length; i++){
      if(colToCheck[i] === numToCheck){
        check = false;
      }
    }
    return check;
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

// console.log(game.findCell());
// console.log(game.checkHorizontal(0, 5));
// console.log(game.checkVertical(2, 4));
console.log(game.findBlock(8, 6));
console.log(game.checkBlockCell(game.findBlock(8,6), 2));