/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/

var n = Math.floor(Math.random() * 9999);
var nToString = n.toString();
var nCifre = nToString.length;

if(nCifre == 1){
  console.log('Questo numero ha ' + nCifre + ' cifra');
}else{
  console.log('Questo numero ha ' + nCifre + ' cifre');
}
