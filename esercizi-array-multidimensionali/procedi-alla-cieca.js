/*
  Procedi alla cieca
  Scrivi un programma che stampi il contenuto di una matrice i cui valori interi sono generati casualmente nel range di 0 e 100.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

var n = 3;
var matrice = [];

matrice[0] = [];
matrice[1] = [];
matrice[2] = [];

for (i = 0; i < n; i++) {
  num = Math.round(Math.random()*100 + 1);
  matrice[0].push(num);
  num = Math.round(Math.random()*100 + 1);
  matrice[1].push(num);
  num = Math.round(Math.random()*100 + 1);
  matrice[2].push(num);
}
console.log(matrice);
