/*
  La bellezza della casualità
  Scrivi una funzione che prenda in input un numero e restituisca un numero casuale compreso tra 0 e l'argomento passato.


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

var numero = Math.floor(Math.random() * 101);
console.log(numero);

function numeroCasuale(numero){
  var nCasuale = Math.floor(Math.random() * numero);
  if (nCasuale > 0 && nCasuale < numero){
    return nCasuale;
  }else{
    return false;
  }
}

console.log(numeroCasuale(numero));
