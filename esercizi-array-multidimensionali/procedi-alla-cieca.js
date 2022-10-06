/*
  Procedi alla cieca
  Scrivi un programma che stampi il contenuto di una matrice i cui valori interi sono generati casualmente nel range di 0 e 100.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

/* METODO 1 */

var n = 3;
var m = 3;
var matrice = [];

for(var i = 0; i < n; i++){
  arrN = [];
  matrice.push(arrN);
  for(var j = 0; j < m; j++){
    num = Math.round(Math.random()*100 + 1);
    arrN.push(num)[j];
  }
}

console.log(matrice);

/* METODO 2 */

var matrice = [];

matrice[0] = [];
matrice[1] = [];
matrice[2] = [];

matrice[0][0] = num = Math.round(Math.random()*100 + 1);
matrice[0][1] = num = Math.round(Math.random()*100 + 1);
matrice[0][2] = num = Math.round(Math.random()*100 + 1);
matrice[1][0] = num = Math.round(Math.random()*100 + 1);
matrice[1][1] = num = Math.round(Math.random()*100 + 1);
matrice[1][2] = num = Math.round(Math.random()*100 + 1);
matrice[2][0] = num = Math.round(Math.random()*100 + 1);
matrice[2][1] = num = Math.round(Math.random()*100 + 1);
matrice[2][2] = num = Math.round(Math.random()*100 + 1);

console.log(matrice);
