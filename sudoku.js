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
            row: c
          }
          zeroPositions.push(temp);
        }
      }

    }

    ////////////////////
    // ACTUAL SOLVING //
    ////////////////////

    console.log(board) ;
  
    let threeThree = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
    
    //col
    for (let i = 0; i < board.length; i++) {

      //row
      for (let c = 0; c < board[i].length; c++) {

        

        if (board[i][c] === '0') {
        let number = '123456789';

          //remove number from horizontal
          for (let f = 0; f < board[i].length; f++) {
            if (board[i][f] !== '0') {
              number = number.replace(board[i][f].toString(), '');
            }
          }

          //remove number from vertical
          for (let f = 0; f < board[i].length; f++) {
            if (board[f][c] !== '0') {
              number = number.replace(board[f][c].toString(), '');
            }
          }

          //remove number from 3x3 box
          let targetCol = threeThree[Math.floor(i/3)];
          let targetRow = threeThree[Math.floor(c/3)];

          for (let n = 0; n < 3; n++) {
            for (let r = 0; r < 3; r++) {
              if (board[targetCol[n]][targetRow[r]] !== '0') {
                number = number.replace(board[targetCol[n]][targetRow[r]].toString(), '');
              }

            }
          }

          // changing the number from 0 to something
          if (number.length > 0) {
            console.log('before: ' + board[i][c]);
            board[i][c] = number[0];
            console.log('after: ' + board[i][c]);
          }
        }
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