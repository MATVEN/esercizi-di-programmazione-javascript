/*
  Conta il numero
  Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

    
  http://www.imparareaprogrammare.it
*/
var number = Math.round(Math.random()*9999 + 1);
console.log(number)

function contaCifre(number){
  var length = (number + '').replace('.', '').replace('-', '').length;
  if(length == 1){
    return length + ' cifra';
  }else{
    return length + ' cifre';
  }
}

console.log(contaCifre(number));
