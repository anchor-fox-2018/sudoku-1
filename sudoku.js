"use strict"

class Sudoku {
  constructor(board_string) {
  }

  sleep (milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }
  clearScreen () {
    // Un-comment this line if you have trouble with console.clear();
    // return process.stdout.write('\033c');
    console.clear();
  }
  // var cell = this.findCell();
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

    this.onTrack(checkSteps, 0, 0);
    
    // return board;
  }


  backTrack(rowStart, colStart, checkSteps){
    
    let cell = this.findCell();  
    let i = rowStart;
    let j = colStart-1;
    let currentCell = this.currentBoard(checkSteps)[i][cell[i][j]]
    if(i === 0 && j === 0){
      return this.onTrack(checkSteps, i, j+1)
    // this.onTrack(checkSteps, i, j+1)

    } else {

      let check = false;
      while(check === false){
        if(this.checkHorizontal(checkSteps, i, currentCell) === false || this.checkVertical(checkSteps, cell[i][j], currentCell) === false || this.checkBlockCell(this.findBlock(checkSteps, i,cell[i][j]), currentCell) === false){
          if(currentCell < 9){
            currentCell++
          } else {
            checkSteps[i][j] = 0;
  
            if(j === 0){
                i -= 1;
                j = cell[i].length;
            }  
            this.backTrack(i, j, checkSteps)
          }
          // return checkSteps;
        } else {
          check = true;
          checkSteps[i][j] = currentCell;
        }
      }
      return this.onTrack(checkSteps, i, j+1)
    }
      
    
  }

  onTrack(checkSteps, rowStart, colStart){

    let cell = this.findCell();
    for(let i = rowStart; i < cell.length; i++){
      for(let j = colStart; j < cell[i].length; j++){
    // this.cell =  this.findCell()
        let currentCell = this.currentBoard(checkSteps)[i][cell[i][j]];//??? atau this.currentBoard(checkSteps)[i]...

        // console.log(currentCell);
        let check = false;
        while (check === false){
          if(this.checkHorizontal(checkSteps, i, currentCell) === false || this.checkVertical(checkSteps, cell[i][j], currentCell) === false || this.checkBlockCell(this.findBlock(checkSteps, i,cell[i][j]), currentCell) === false){
            if(currentCell < 9){
              currentCell++;
            } else {
              console.log('you are backtracking!')
              if(j === 0){
                i -= 1;
                j = cell[i].length;
              }
              this.backTrack(i, j, checkSteps)
            }

          } else {

            check = true;
            //changing for currentboard
            checkSteps[i][j] = currentCell;
          }
          console.log(this.currentBoard(checkSteps));
          debugger;
        }
          // if(i === cell.length-1 && j == checkSteps[] )
          // debugger;
      }
      if(colStart > 0){
        colStart = 0;
      }
    }
    //stop the program
    return this.currentBoard(checkSteps);
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

  findCell() {
    var cellToCheck = [];
    let board = this.board();
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