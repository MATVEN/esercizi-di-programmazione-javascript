/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta.

  Esempio:
    Input: 
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]

  http://www.imparareaprogrammare.it
*/

var array = [[1, 2], [3, 4], [5, 6]];
var arrM = [];

for(let i = 0; i < array.length; i++){
  for(let j = 0; j < array[i].length; j++){
    if (arrM[j] === undefined)
    arrM[j] = [];
    arrM[j][i] = array[i][j];
  }
}

console.log(array);
console.log(arrM);
