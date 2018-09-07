"use strict";
const DIM = 9;
const BLANK = 0;
const SPACE = ' ';
const LINE = '|';
const NEW_ROW = "-------------------------------------";
/*
"
105802000
090076405
200400819
019007306
762083090
000061050
007600030
430020501
600308900
"
 */
class Sudoku {
  constructor(board_string) {
  }
  board(){
    let board_string = `105802000090076405200400819019007306762083090000061050007600030430020501600308900`
    let X = [];

    for (let i = 0, lastPosition = 0; i <9; i++) {
      let arrCol = [];
      for (let j = 0; j < 9; j++) {
        arrCol.push(board_string[lastPosition]);
        lastPosition++;
      }
      X.push(arrCol);
    }
    console.log(X);
  }
  solve() { }
  checkVertical() { }
  checkHorizontal() { }
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