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
	
console.log(maggiore(a,b,c), minore(a,b,c));


/* VARIANTE */

var n = Math.round(Math.random() * 7) + 3;
var arr = [];

for (var i = 1; i < n + 1; i++) {
	num = Math.round(Math.random() * 100 + 1);
	arr.push(num);
}

function maggiore(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(max < arr[i]) max = arr[i];
	}
	return max;
}

function minore(arr){
	var min = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(min > arr[i]) min = arr[i];
	}
	return min;
}

console.log('N: ' + n + '\n' + 'Array: ' + arr + '\n' + 'Maggiore: ' ,maggiore(arr) + '\n' + 'Minore:' ,minore(arr));
