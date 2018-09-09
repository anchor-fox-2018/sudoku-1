"use strict"

class Sudoku {
  constructor(board_string) {
  }

  solve() {
    let board = game.board();
    let cell = this.findCell();
    let checkSteps = []
    for(let i = 0; i < cell.length; i++){
      let rowCheckSteps = []
      for(let j = 0; j < cell[i].length; j++){
        rowCheckSteps.push(0)
      }
      checkSteps.push(rowCheckSteps);
    }

    for(let i = 0; i < cell.length; i++){
      for(let j = 0; j < cell[i].length; j++){
        let currentCell = board[i][cell[i][j]];
        // console.log(currentCell);
        let check = false;
        while (check === false){
          if(this.checkHorizontal(checkSteps, i, currentCell) === false || this.checkVertical(checkSteps, cell[i][j], currentCell) === false || this.checkBlockCell(this.findBlock(checkSteps, i,cell[i][j]), currentCell) === false){
            if(currentCell < 9){
              currentCell++;
            } else {
              console.log('you have to backtrack!')
            }

          } else {

            check = true;
            //changing for currentboard
            checkSteps[i][j] = currentCell;
          }
          console.log(this.currentBoard(checkSteps));
          debugger;
        }
        // debugger;
      }
    }
    // return board;
  }

  
  findBlock(checkSteps,row, col){
    let board = this.currentBoard(checkSteps);
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

  currentBoard(checkSteps){

    let board = this.board();
    let cell = this.findCell();
    for(let i = 0; i < cell.length; i++){
      for(let j = 0; j < cell[i].length; j++){
        board[i][cell[i][j]] = checkSteps[i][j];
      }
    }
    return board;
    
  }

  checkHorizontal(checkSteps, row, numToCheck){
    
    let rowToCheck = this.currentBoard(checkSteps)[row];
    let check = true;
    for(let i = 0; i < rowToCheck.length; i++){
      if(rowToCheck[i] === numToCheck){
        check = false;
      }
      // debugger;

    }
    return check;
  }

  checkVertical(checkSteps, col, numToCheck){
    let colToCheck = [];
    for(let i = 0; i < 9; i++){
      colToCheck.push(this.currentBoard(checkSteps)[i][col]);
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

// console.log(board_string);
// Remember: this will just fill out what it can and not "guess"

// console.log(game.board())
// console.log(game.findCell());
// console.log(game.solve())
// let udin = undefined;
// console.log(!udin);
// console.log(udin);
game.solve();

// console.log('horizontal : ', game.checkHorizontal(0, 9));
// console.log('vertical : ', game.checkVertical(8, 9));
// console.log(game.findBlock(8, 6));
// console.log('block: ', game.checkBlockCell(game.findBlock(0,8), 9));