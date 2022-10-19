/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.

  Esempio:
    Input : N = 123456, K = 3
    Output: 4

    
  http://www.imparareaprogrammare.it
*/

var n = Math.floor(Math.random() * 99999) + 1;
var k = Math.floor(Math.random() * 5);
console.log(n + ' - ' + k);

function estrai(n, k){
  var string = String(n);
  var length = string.length;
  
  if(k > string.length){
    return 0;
  }else{
    return string.substr(-k,1);
  }
}

console.log(estrai(n, k));
