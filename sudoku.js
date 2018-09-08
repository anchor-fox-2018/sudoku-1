"use strict";
const BLANK = 0;
const SPACE = ' ';
const LINE = '|';
const NEW_ROW = "-------------------------------------";
class Sudoku {
  constructor(board_string) {
    this._board_string = board_string;
  }
  processStringToArray(board_string) {
    //let board_string = `105802000090076405200400819019007306762083090000061050007600030430020501600308900`
    // Fill the array with boardstring data
    let arrResult = [];
    for (let i = 0, lastPosition = 0; i < 9; i++) {
      let arrCol = [];
      for (let j = 0; j < 9; j++) {
        arrCol.push(Number(board_string[lastPosition]));
        lastPosition++;
      }
      arrResult.push(arrCol);
    }
    return arrResult;
  }
  printGrid(array) {
    for (let i = 0; i < array.length; i++) {
      let printInLine = "";
      for (let j = 0; j < array.length; j++) {
        printInLine = printInLine + array[i][j];
        //console.log(array[i][j]);
      }
      //console.log('n\n');
    }
  }
  board() {
    if (this.solveSudoku(this.processStringToArray())) {
      this.printGrid(solvedSudoku)
    }
    else {
      console.log('Ga bisa boss');
    }
  }
  checkBlankElement(array, locationList) {
    for (let row = 0; row < array.length; row++) {
      for (let col = 0; col < array.length; col++) {
        if (array[row][col] === BLANK) {
          locationList[0] = row;
          locationList[1] = col;
          return true;
        }
      }
    }
    return false;
  }
  checkRow(array, row, num) {
    for (let i = 0; i < array.length; i++) {
      if (array[row][i] === num) {
        return true;
      }
    }
    return false;
  }
  checkColumn(array, col, num) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][col] === num) {
        return true;
      }
    }
    return false;
  }
  checkBox3x3(array, boxStartRow, boxStartCol, num) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (array[i + boxStartRow][j + boxStartCol] === num) {
          return true;
        }
      }
    }
    return false;
  }
  checkElementIsSafe(array, row, col, num) {
    return !this.checkRow(array, row, num) &&
      !this.checkColumn(array, col, num) &&
      !this.checkBox3x3(array, row - row % 3, col - col % 3, num);
  }
  solveSudoku(array) {
    let locationList = [0, 0];
    if (!this.checkBlankElement(array, locationList)) {
      return true;
    }
    let row = locationList[0];
    let col = locationList[1];
    // num loop try from 1 - 9
    for (let num = 1; num <= 9; num++) {
      // if location is promising and safe
      if (this.checkElementIsSafe(array, row, col, num)) {
        // assign value to 0 / BLANK
        array[row][col] = num;
        // return if success 
        if (this.solveSudoku(array)) {
          return true;
        }
        // failure, back again and try
        array[row][col] = 0;
      }
    }
    // backtracking here
    return false;
  }
}

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
//game.solve()

console.log(game.board())