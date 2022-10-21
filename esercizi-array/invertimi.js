/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)

  http://www.imparareaprogrammare.it
*/

/* METODO 1 */

var n = Math.floor(Math.random() * 10);
var arr = [];

for (i = 0; i < n; i++) {
  num = Math.round(Math.random()*100 + 1);
  arr.push(num);
}

console.log('Array ottenuto: ' + arr + ' - Array invertito: ' + arr.reverse());

/* METODO 2 */

var vettore1 = [];
var vettore2 = [];
var n = Math.floor(Math.random() * 10);
for(var i = 0; i < n; i++){
	vettore1[i] = Math.floor(Math.random()*20 + 1);
}

i--;

for(var j = 0; j < n; j++){
	vettore2[j] = vettore1[i];
	i--;
}
console.log(vettore1+'\n'+vettore2);

/* METODO 3 */

var n = Math.round(Math.random() * 10) + 1;
var arr = [];

for (i = 0; i < n; i++) {
  num = Math.round(Math.random()*100 + 1);
  arr.push(num);
}
console.log('Array ottenuto: ' + arr);

for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
