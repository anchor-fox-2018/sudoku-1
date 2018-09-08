"use strict"

//all sudoku stuff is in here
class Sudoku {
    constructor(board_string) {
        this.num = board_string;
    }

    solve() {
        //adding the board from board()
        let board = this.board();
        let zP = [];

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
                    zP.push(temp);
                }
            }

        }

        ////////////////////
        // ACTUAL SOLVING //
        ////////////////////

        let threeThree = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

        for (let i= 0; i < zP.length; i++) {

            //eliminating numbers

            //eliminating vertical
            for (let c = 0; c < board.length; c++) {
                if (board[c][zP[i].row] !== '0') {
                    zP[i].numbers = zP[i].numbers.replace(board[c][zP[i].row], '');
                }
            }

            //eliminationg horizontal
            for (let c = 0; c < board.length; c++) {
                if (board[zP[i].col][c] !== '0') {
                    zP[i].numbers = zP[i].numbers.replace(board[zP[i].col][c], '');
                }
            }

            //eliminating 3x3
            let threeCol = threeThree[Math.floor(zP[i].col / 3)];
            let threeRow = threeThree[Math.floor(zP[i].row / 3)];

            for (let n = 0; n < 3; n++) {
                for (let r = 0; r < 3; r++) {
                    if (board[threeCol[n]][threeRow[r]] !== '0') {
                        zP[i].numbers = zP[i].numbers.replace(board[threeCol[n]][threeRow[r]], '');
                    }

                }
            }

            //backtracking OR adding number
            if (zP[i].numbers.length === 0) {
                // zP[i].numbers = '123456789'
                // i -= 2;
                // zP[i + 1].numbers = zP[i + 1].numbers.replace(zP[i + 1].numbers[0], '');
                
            }

            else if (zP[i].numbers.length > 0) {
                board[zP[i].col][zP[i].row] = zP[i].numbers[0];
                zP[i].numbers = zP[i].numbers.replace(zP[i].numbers[0], '');
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