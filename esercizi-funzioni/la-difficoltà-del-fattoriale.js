/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.

  Esempio:
    Input: n = 5
    Output: 120

  Consigli:
  Il fattoriale è il prodotto dei numeri interi da 1 a n.
  Esempio: n = 5, fattoriale = 5*4*3*2*1 = 120

  http://www.imparareaprogrammare.it
*/


var n = Math.round(Math.random() * 9) + 1;
	
function fattoriale(n){
  var risultato = 1
	for(var i = 2; i < n + 1; i++){
    risultato *= i;
  }
  return risultato;
}

console.log('n:' + n + '\n' +' Fattoriale: ' + fattoriale(n));
