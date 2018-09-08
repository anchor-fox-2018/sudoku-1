const BLANK = 0;
const SPACE = ' ';
const LINE = '|';
const NEW_ROW = "-------------------------------------";

var solvedArray = readFile();

function readFile() {
    let board_string = `105802000090076405200400819019007306762083090000061050007600030430020501600308900`
    // Fill the 
    let arrResult = [];
    for (let i = 0, lastPosition = 0; i < 9; i++) {
        let arrCol = [];
        for (let j = 0; j < 9; j++) {
            arrCol.push(Number(board_string[lastPosition]));
            lastPosition++;
        }
        arrResult.push(arrCol);
    }
    solvedArray = arrResult;
    return arrResult;
}

function printGrid(array) {
    for (let i = 0; i < array.length; i++) {
        let line = ""
        for (let j = 0; j < array.length; j++) {
            //console.log(array[i][j]);
            line = line + array[i][j];
        }
        console.log(line);
        // console.log('n');
        // console.log('\n');
    }
}

function board() {
    if (solveSudoku(readFile())) {
        printGrid(solvedArray)
    }
    else {
        console.log('Ga bisa boss');
    }
}
function checkBlankElement(array, locationList) {
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
function checkRow(array, row, num) {
    for (let i = 0; i < array.length; i++) {
        if (array[row][i] === num) {
            return true;
        }
    }
    return false;
}
function checkColumn(array, col, num) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][col] === num) {
            return true;
        }
    }
    return false;
}
function checkBox3x3(array, boxStartRow, boxStartCol, num) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (array[i + boxStartRow][j + boxStartCol] === num) {
                return true;
            }
        }
    }
    return false;
}
function checkElementIsSafe(array, row, col, num) {
    return !checkRow(array, row, num) &&
        !checkColumn(array, col, num) &&
        !checkBox3x3(array, row - row % 3, col - col % 3, num);
}
function solveSudoku(array) {
    let locationList = [0, 0];
    if (!checkBlankElement(array, locationList)) {
        return true;
    }
    let row = locationList[0];
    let col = locationList[1];
    // num loop try from 1 - 9
    for (let num = 1; num <= 9; num++) {
        // if location is promising and safe
        if (checkElementIsSafe(array, row, col, num)) {
            // assign value to 0 / BLANK
            array[row][col] = num;
            // return if success 
            if (solveSudoku(array)) {
                return true;
            }
            // failure, back again and try
            array[row][col] = BLANK;
        }
    }
    // backtracking here
    return false;
}

board();