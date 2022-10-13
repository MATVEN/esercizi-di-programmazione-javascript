/*
  Righe o colonne?
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali compresi tra 1 e 100.
    - Dichiari due array, l'array R di N elementi e l'array C di M elementi.
    - Salvi, nell'array R le somme di ogni riga della matrice e nell'array C le somme di tutte le colonne.
    - Stampi la matrice e i due array.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]

        array R = [152, 61]
        array C = [2, 70, 140]

  http://www.imparareaprogrammare.it
*/

var n = 2;
var m = 3;
var matrice = [];

for(var i=0; i<n; i++){
  matrice[i] = [];
}

for(i = 0; i < n; i++){
  for(j = 0; j < m; j++){
    matrice[i][j] = Math.floor(Math.random()*100+1);
  }
}

var matriceR = [];
var matriceC = [];

for(i = 0; i < n; i++){
  matriceR[i]=0;
  for(j = 0; j < m; j++){
    matriceR[i] += matrice[i][j];
  }
}

for(j = 0; j < m; j++){
  matriceC[j]=0;
  for(i = 0; i < n; i++){
    matriceC[j] += matrice[i][j];
  }
}

console.log(matrice);
console.log(matriceR);
console.log(matriceC);
