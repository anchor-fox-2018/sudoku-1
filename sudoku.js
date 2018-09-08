"use strict"

class Sudoku {
  constructor(board_string) {}

  solve(arr) {
    //masukkan index arr yang isinya 0, ke variabel kosong.
    let kosong = []
    for(let i = 0;i < arr.length;i++){
      for(let j = 0;j < arr[i].length;j++){
        if(arr[i][j] == 0){
          kosong.push([i,j])
        }
      }
    }
    for(let i = 0;i < kosong.length;i++){
      let nilai = 1;
      let idx = kosong[i];
      //kotak pertama
      //if(nilai < 10){
        if(idx[0] < 3 && idx[1] < 3){
          while(arr[idx[0]][idx[1]] === 0){
            if(arr[idx[0]][0] == nilai || arr[idx[0]][1] == nilai||arr[idx[0]][2] == nilai||arr[idx[0]][3] == nilai||arr[idx[0]][4] == nilai||arr[idx[0]][5] == nilai||arr[idx[0]][6] == nilai||arr[idx[0]][7] == nilai||arr[idx[0]][8] == nilai||arr[0][idx[1]] == nilai || arr[1][idx[1]] == nilai||arr[2][idx[1]] == nilai||arr[3][idx[1]] == nilai||arr[4][idx[1]] == nilai||arr[5][idx[1]] == nilai||arr[6][idx[1]] == nilai||arr[7][idx[1]] == nilai||arr[8][idx[1]] == nilai||arr[0][0] == nilai || arr[0][1] == nilai||arr[0][2] == nilai||arr[1][0] == nilai || arr[1][1] == nilai||arr[1][2] == nilai||arr[2][0] == nilai || arr[2][1] == nilai||arr[2][2] == nilai){
              nilai++
            }else{
              //if(nilai < 10){
                arr[idx[0]][idx[1]] = nilai
              // }else{
              //   break
              // }
            }
            
          }
        }
        if(idx[0] < 3 && idx[1] >= 3 && idx[1] < 6){
          while(arr[idx[0]][idx[1]] === 0){
            if(arr[idx[0]][0] == nilai || arr[idx[0]][1] == nilai||arr[idx[0]][2] == nilai||arr[idx[0]][3] == nilai||arr[idx[0]][4] == nilai||arr[idx[0]][5] == nilai||arr[idx[0]][6] == nilai||arr[idx[0]][7] == nilai||arr[idx[0]][8] == nilai||arr[0][idx[1]] == nilai || arr[1][idx[1]] == nilai||arr[2][idx[1]] == nilai||arr[3][idx[1]] == nilai||arr[4][idx[1]] == nilai||arr[5][idx[1]] == nilai||arr[6][idx[1]] == nilai||arr[7][idx[1]] == nilai||arr[8][idx[1]] == nilai||arr[0][3] == nilai || arr[0][4] == nilai||arr[0][5] == nilai||arr[1][3] == nilai || arr[1][4] == nilai||arr[1][5] == nilai||arr[2][3] == nilai || arr[2][4] == nilai||arr[2][5] == nilai){
              nilai++
            }else{
              //if(nilai < 10){
                arr[idx[0]][idx[1]] = nilai
              // }else{
              //   break
              // }
            }
            
          }
        }
        if(idx[0] < 3 && idx[1] >= 6 && idx[1] < 9){
          while(arr[idx[0]][idx[1]] === 0){
            if(arr[idx[0]][0] == nilai || arr[idx[0]][1] == nilai||arr[idx[0]][2] == nilai||arr[idx[0]][3] == nilai||arr[idx[0]][4] == nilai||arr[idx[0]][5] == nilai||arr[idx[0]][6] == nilai||arr[idx[0]][7] == nilai||arr[idx[0]][8] == nilai||arr[0][idx[1]] == nilai || arr[1][idx[1]] == nilai||arr[2][idx[1]] == nilai||arr[3][idx[1]] == nilai||arr[4][idx[1]] == nilai||arr[5][idx[1]] == nilai||arr[6][idx[1]] == nilai||arr[7][idx[1]] == nilai||arr[8][idx[1]] == nilai||arr[0][4] == nilai || arr[0][5] == nilai||arr[0][6] == nilai||arr[1][4] == nilai || arr[1][5] == nilai||arr[1][6] == nilai||arr[2][4] == nilai || arr[2][5] == nilai||arr[2][6] == nilai){
              nilai++
            }else{
              //if(nilai < 10){
                arr[idx[0]][idx[1]] = nilai
              // }else{
              //   break
              // }
            }
            
          }
        }
        //kotak kedua
        if(idx[0] >= 3 && idx[0] < 6 && idx[1] < 3){
          while(arr[idx[0]][idx[1]] === 0){
            if(arr[idx[0]][0] == nilai || arr[idx[0]][1] == nilai||arr[idx[0]][2] == nilai||arr[idx[0]][3] == nilai||arr[idx[0]][4] == nilai||arr[idx[0]][5] == nilai||arr[idx[0]][6] == nilai||arr[idx[0]][7] == nilai||arr[idx[0]][8] == nilai||arr[0][idx[1]] == nilai || arr[1][idx[1]] == nilai||arr[2][idx[1]] == nilai||arr[3][idx[1]] == nilai||arr[4][idx[1]] == nilai||arr[5][idx[1]] == nilai||arr[6][idx[1]] == nilai||arr[7][idx[1]] == nilai||arr[8][idx[1]] == nilai||arr[0][0] == nilai || arr[0][1] == nilai||arr[0][2] == nilai||arr[1][0] == nilai || arr[1][1] == nilai||arr[1][2] == nilai||arr[2][0] == nilai || arr[2][1] == nilai||arr[2][2] == nilai){
              nilai++
            }else{
              //if(nilai < 10){
                arr[idx[0]][idx[1]] = nilai
              // }else{
              //   break
              // }
            }
            
          }
        }
        if(idx[0] >= 3 && idx[0] < 6 && idx[1] >= 3 && idx[1] < 6){
          while(arr[idx[0]][idx[1]] === 0){
            if(arr[idx[0]][0] == nilai || arr[idx[0]][1] == nilai||arr[idx[0]][2] == nilai||arr[idx[0]][3] == nilai||arr[idx[0]][4] == nilai||arr[idx[0]][5] == nilai||arr[idx[0]][6] == nilai||arr[idx[0]][7] == nilai||arr[idx[0]][8] == nilai||arr[0][idx[1]] == nilai || arr[1][idx[1]] == nilai||arr[2][idx[1]] == nilai||arr[3][idx[1]] == nilai||arr[4][idx[1]] == nilai||arr[5][idx[1]] == nilai||arr[6][idx[1]] == nilai||arr[7][idx[1]] == nilai||arr[8][idx[1]] == nilai||arr[0][3] == nilai || arr[0][4] == nilai||arr[0][5] == nilai||arr[1][3] == nilai || arr[1][4] == nilai||arr[1][5] == nilai||arr[2][3] == nilai || arr[2][4] == nilai||arr[2][5] == nilai){
              nilai++
            }else{
              //if(nilai < 10){
                arr[idx[0]][idx[1]] = nilai
              // }else{
              //   break
              // }
            }
            
          }
        }
        if(idx[0] >= 3 && idx[0] < 6 && idx[1] >= 6 && idx[1] < 9){
          while(arr[idx[0]][idx[1]] === 0){
            if(arr[idx[0]][0] == nilai || arr[idx[0]][1] == nilai||arr[idx[0]][2] == nilai||arr[idx[0]][3] == nilai||arr[idx[0]][4] == nilai||arr[idx[0]][5] == nilai||arr[idx[0]][6] == nilai||arr[idx[0]][7] == nilai||arr[idx[0]][8] == nilai||arr[0][idx[1]] == nilai || arr[1][idx[1]] == nilai||arr[2][idx[1]] == nilai||arr[3][idx[1]] == nilai||arr[4][idx[1]] == nilai||arr[5][idx[1]] == nilai||arr[6][idx[1]] == nilai||arr[7][idx[1]] == nilai||arr[8][idx[1]] == nilai||arr[0][4] == nilai || arr[0][5] == nilai||arr[0][6] == nilai||arr[1][4] == nilai || arr[1][5] == nilai||arr[1][6] == nilai||arr[2][4] == nilai || arr[2][5] == nilai||arr[2][6] == nilai){
              nilai++
            }else{
              //if(nilai < 10){
                arr[idx[0]][idx[1]] = nilai
              // }else{
              //   break
              // }
            }
            
          }
        }
        //kotak ketiga
        if(idx[0] >= 6 && idx[0] < 9 && idx[1] < 3){
          while(arr[idx[0]][idx[1]] === 0){
            if(arr[idx[0]][0] == nilai || arr[idx[0]][1] == nilai||arr[idx[0]][2] == nilai||arr[idx[0]][3] == nilai||arr[idx[0]][4] == nilai||arr[idx[0]][5] == nilai||arr[idx[0]][6] == nilai||arr[idx[0]][7] == nilai||arr[idx[0]][8] == nilai||arr[0][idx[1]] == nilai || arr[1][idx[1]] == nilai||arr[2][idx[1]] == nilai||arr[3][idx[1]] == nilai||arr[4][idx[1]] == nilai||arr[5][idx[1]] == nilai||arr[6][idx[1]] == nilai||arr[7][idx[1]] == nilai||arr[8][idx[1]] == nilai||arr[0][0] == nilai || arr[0][1] == nilai||arr[0][2] == nilai||arr[1][0] == nilai || arr[1][1] == nilai||arr[1][2] == nilai||arr[2][0] == nilai || arr[2][1] == nilai||arr[2][2] == nilai){
              nilai++
            }else{
              // if(nilai < 10){
                arr[idx[0]][idx[1]] = nilai
              // }else{
              //   break
              // }
            }
            
          }
        }
        if(idx[0] >= 6 && idx[0] < 9 && idx[1] >= 3 && idx[1] < 6){
          while(arr[idx[0]][idx[1]] === 0){
            if(arr[idx[0]][0] == nilai || arr[idx[0]][1] == nilai||arr[idx[0]][2] == nilai||arr[idx[0]][3] == nilai||arr[idx[0]][4] == nilai||arr[idx[0]][5] == nilai||arr[idx[0]][6] == nilai||arr[idx[0]][7] == nilai||arr[idx[0]][8] == nilai||arr[0][idx[1]] == nilai || arr[1][idx[1]] == nilai||arr[2][idx[1]] == nilai||arr[3][idx[1]] == nilai||arr[4][idx[1]] == nilai||arr[5][idx[1]] == nilai||arr[6][idx[1]] == nilai||arr[7][idx[1]] == nilai||arr[8][idx[1]] == nilai||arr[0][3] == nilai || arr[0][4] == nilai||arr[0][5] == nilai||arr[1][3] == nilai || arr[1][4] == nilai||arr[1][5] == nilai||arr[2][3] == nilai || arr[2][4] == nilai||arr[2][5] == nilai){
              nilai++
            }else{
              //if(nilai < 10){
                arr[idx[0]][idx[1]] = nilai
              // }else{
              //   break
              // }
            }
            
          }
        }
        if(idx[0] >= 6 && idx[0] < 9 && idx[1] >= 6 && idx[1] < 9){
          while(arr[idx[0]][idx[1]] === 0){
            if(arr[idx[0]][0] == nilai || arr[idx[0]][1] == nilai||arr[idx[0]][2] == nilai||arr[idx[0]][3] == nilai||arr[idx[0]][4] == nilai||arr[idx[0]][5] == nilai||arr[idx[0]][6] == nilai||arr[idx[0]][7] == nilai||arr[idx[0]][8] == nilai||arr[0][idx[1]] == nilai || arr[1][idx[1]] == nilai||arr[2][idx[1]] == nilai||arr[3][idx[1]] == nilai||arr[4][idx[1]] == nilai||arr[5][idx[1]] == nilai||arr[6][idx[1]] == nilai||arr[7][idx[1]] == nilai||arr[8][idx[1]] == nilai||arr[0][4] == nilai || arr[0][5] == nilai||arr[0][6] == nilai||arr[1][4] == nilai || arr[1][5] == nilai||arr[1][6] == nilai||arr[2][4] == nilai || arr[2][5] == nilai||arr[2][6] == nilai){
              nilai++
            }else{
              //if(nilai < 10){
                arr[idx[0]][idx[1]] = nilai
              // }else{
              //   break
              // }
            }
            
          }
        }
      // }else{
      //   break
      // }      
    }

    return arr
  }

  // Returns a string representing the current state of the board
  board(str) {
    let idx = 0;
    let hasil = [];
    for(let i = 0;i < 9;i++){
      let isi = []
      for(let j = 0;j < 9;j++){
        isi.push(Number(str[idx]));
        idx++
      }
      hasil.push(isi)
    }
    return hasil
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
game.solve(game.board(board_string))
//console.log(board_string)
console.log(game.board(board_string))
console.log('   ========Perubahan==========')
console.log(game.solve(game.board(board_string)))