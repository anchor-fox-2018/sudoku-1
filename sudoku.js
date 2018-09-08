"use strict"

class Sudoku {
  constructor(board_string) {
    this.string = board_string;
    this.game = this.board();
    this.checkNol = this.checkZero();
  }

  // Returns a string representing the current state of the board
  board() {
    let arrayOfNum = [];
    let rowNum = [];
    for (var i = 0; i < this.string.length; i++) {
      if (i % 9 === 0) {
        rowNum.join(' ');
        arrayOfNum.push(rowNum);
        rowNum = [];
        rowNum.push(Number(this.string[i]));
      } else {
        rowNum.push(Number(this.string[i]));
      }
    }
    rowNum.join(' ');
    arrayOfNum.push(rowNum);
    arrayOfNum.shift();
    return arrayOfNum;
    //console.log(arrayOfNum);
  } //end board function

  checkZero() {
    let arrayOfCoordinate = [];
    for (let k = 0; k < this.game.length; k++) {
      for (let j = 0; j < this.game[k].length; j++) {
        if (this.game[k][j] === 0) {
          arrayOfCoordinate.push([k,j]);
        }
      }
    }
    return arrayOfCoordinate;
  }// end checkZero

  checkRow(board, row, value) {
    for (let m = 0; m < board[row].length; m++) {
      if (board[row][m] === value) {
        return false;
      }
    }
    return true;
  }

  checkColumn(board, col, value) {
    for (let n = 0; n < board[col].length; n++) {
      if (board[n][col] === value) {
        return false;
      }
    }
    return true;
  }

  checkKotak(board, row, col, value) {
    let xRow = Math.floor(row/3) * 3;
    let xCol = Math.floor(col/3) * 3;
    for (let o = xRow; o < xCol + 3; o++) {
      for (let p = xCol; p < xRow + 3; p++) {
        if (board[o][p] === value) {
          return false;
        }
      }
    }
    return true;
  }

  checkAllSide(board, row, col, value) {
    if (this.checkRow(board, row, value) && this.checkColumn(board, col, value) && this.checkKotak(board, row, col, value)) {
      return true;
    } else {
      return false;
    }
  }

  solve() {
    let max = 9;
    for (let s = 0; s < this.checkNol.length;) {
      let row = this.checkNol[s][0];
      let col = this.checkNol[s][1];
      let value = this.game[row][col] +1;
      let status = false;
      while (!status && value <= max) {
        if (this.checkAllSide(this.game, row, col, value)) {
          this.game[row][col] = value;
          s++;
          status = true;
        } else {
          value++;
        }
      }
      if (!status) {
        this.game[row][col] = 0;
        s--;
      }
    }
    let resultAwal = this.game.map(b => b).join(' ')
    let resultLagi = this.game.map(a => '  '+ a ).join('\n+---+----+----+----+----+----+----+----+---+\n').replace(/,/g, '  |  ');
    console.log('\n+---+----+----+----+----+----+----+----+---+\n' + resultLagi + '\n+---+----+----+----+----+----+----+----+---+\n');
  }

} // end class sudoku

// The file has newlines at the end of each line,
// so we call split to remove it (\n)
var fs = require('fs')
var board_string = fs.readFileSync('set-01_sample.unsolved.txt')
  .toString()
  .split("\n")[0]

var game = new Sudoku(board_string)

// Remember: this will just fill out what it can and not "guess"
game.solve()

//game.board()
