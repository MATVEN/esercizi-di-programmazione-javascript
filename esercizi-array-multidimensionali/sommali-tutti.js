/*
  Sommali tutti
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Stampi la matrice e la somma di tutti i valori contenuti.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]
        somma = 212

  http://www.imparareaprogrammare.it
*/

var n = 2;
var m = 3;
var matrice = [];
var somma = 0;

for(var i = 0; i < n; i++){
  arrN = [];
  matrice.push(arrN);
  for(var j = 0; j < m; j++){
    num = Math.round(Math.random()*100 + 1);
    arrN.push(num)[j];
  }
}

for(var i = 0; i < matrice.length; i++){
  for(var j = 0; j < matrice[i].length; j++){
    somma += matrice[i][j]
  }
}


console.log(matrice);
console.log(somma);
