"use strict";
const BLANK = '0';
const SPACE = ' ';
const LINE = '|';
const NEW_ROW = "-------------------------------------";
class Sudoku {
  constructor(board_string) {
  }
  board() {
    let board_string = `105802000090076405200400819019007306762083090000061050007600030430020501600308900`
    // Fill the 
    let arrResult = [];
    for (let i = 0, lastPosition = 0; i < 9; i++) {
      let arrCol = [];
      for (let j = 0; j < 9; j++) {
        arrCol.push(board_string[lastPosition]);
        lastPosition++;
      }
      arrResult.push(arrCol);
    }
    console.log(arrResult);
    // check horizontal
    this.solve(arrResult);
  }

  solve(array) {
    for (let row = 0; row < array.length; row++) {
      for (let col = 0; col < array.length; col++) {
        if (array[row][col]===BLANK) {
          console.log(`Cell ${row} ${col} is BLANK`)
          // masih ngebug
        }
      }
    }

    for (let num = 1; num <= 9; num++) {

    }
  }

  checkVertical(array, col, num) {
    for (let row = 0; row < array.length; row++) {
      if (array[row][col] === num) {
        return true;
      }
    }
    return false;
  }

  checkHorizontal(array, row, num) {
    for (let col = 0; col < array.length; col++) {
      if (array[row][col] === num) {
        return true;
      }
    }
    return false;
  }

  checkBox3x3(array, boxStartRow, boxStartCol, num) {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (array[row + boxStartRow][col + boxStartCol] === num) {
          return true;
        }
      }
    }
    return false;
  }

  isSafe(array, row, col, num) {
    return
    !this.checkHorizontal(array, row, num) &&
      !this.checkVertical(array, row, num) &&
      !this.checkBox3x3(array, row - row % 3, col - col % 3, num);
  }

  // getUnassignedLocation(array) {
  //   for (let row = 0; row < array.length; row++) {
  //     for (let col = 0; col < array.length; col++) {
  //       if (array[row][col] === BLANK) {
  //         return { row:}
  //       }
  //     }
  //   }
  // }
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