"use strict"

//all sudoku stuff is in here
class Sudoku {
  constructor(board_string) {
    this.num = board_string;
  }

  solve() {
    //adding the board from board()
    let board = this.board();
    let zeroPositions = [];
    
    //putting data in

    //col
    for (let i = 0; i < board.length; i++) {

      //row
      for (let c = 0; c < board[i].length; c++) {
        if (board[i][c] === '0') {
          let temp = {
            currentValue: board[i][c],
            col: i,
            row: c,
            numbers: '123456789'
          }
          zeroPositions.push(temp);
          console.log(zeroPositions)
        }
      }

    }

    ////////////////////
    // ACTUAL SOLVING //
    ////////////////////

    console.log(board) ;
  
    let threeThree = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

      //zeroPositions
    for (let c = 0; c < zeroPositions.length; c++) {
      let zP = zeroPositions[c].numbers;
      console.log(zeroPositions[c][0])

        //remove number from horizontal
        for (let f = 0; f < board[c].length; f++) {
          if (board[c][board[zeroPositions[c].row]] !== '0') {
            zP = zP.replace(board[zeroPositions[c].col][zeroPositions[c].row], '');
          }
        }

        //remove number from vertical
        for (let f = 0; f < board[c].length; f++) {
          if (board[zeroPositions[c].col][board[zeroPositions[c].row]] !== '0') {
            zP = zP.replace(board[zeroPositions[c].col][board[zeroPositions[c].row]].toString(), '');
          }
        }

        //remove number from 3x3 box
        let targetCol = threeThree[Math.floor(i/3)];
        let targetRow = threeThree[Math.floor(c/3)];

        for (let n = 0; n < 3; n++) {
          for (let r = 0; r < 3; r++) {
            if (board[zeroPositions[c].col][board[zeroPositions[c].row]] !== '0') {
              zP = zP.replace(board[targetCol[n]][targetRow[r]].toString(), '');
            }

          }
        }

        // changing the number from 0 to something
      if (zP.length > 0) {
        board[zeroPositions[c].col][board[zeroPositions[c].row]] = zeroPositiosn[c].number[0];
          c++;
        }

        
    }

    return board;
  }

  // Returns a string representing the current state of the board
  board() {
    let result = [];
    let counter = 0;
    //col
    for (let i = 0; i < 9; i++) {
      let tempBoard = [];
      //row
      for (let c = 0; c < 9; c++) {
        tempBoard.push(this.num[counter]);
        counter++;
      }
      result.push(tempBoard);
    }
    return result;
  }
}

// CRUNCHING THE NUMBERS USING FS AND EXTERNAL FILE
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
console.log(game.solve())