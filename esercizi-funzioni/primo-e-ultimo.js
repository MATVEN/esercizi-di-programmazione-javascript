/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

  http://www.imparareaprogrammare.it
*/

var a = Math.round(Math.random()*100);
var b = Math.round(Math.random()*100);
var c = Math.round(Math.random()*100);
	
var grande = maggiore(a,b,c);
var piccolo = minore(a,b,c)
	
function maggiore(a,b,c){
  var max = a;
	if(max < b) max = b;
	if(max < c) max = c;
	return max;
}

function minore(a,b,c){
  var min = a;
	if(min > b) min = b;
	if(min > c) min = c;
	return min;
}
	
console.log(grande, piccolo);
