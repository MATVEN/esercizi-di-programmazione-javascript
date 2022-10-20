/*
  Azzecca e azzera
  Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
  Permetti all'utente di inserire un numero e azzera tutti i gli elementi nell'array principale che sono suoi multipli.
  Richiedi all'utente un altro numero e così via.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Per richiedere un numero all'utente puoi usare il comando prompt(), se vuoi saperne di più puoi controllare nella
  documentazione: https://developer.mozilla.org/it/docs/Web/API/Window/prompt

  http://www.imparareaprogrammare.it
*/

var n = 100;
var array = [];

for (var i = 1; i < n; i++) {
  num = Math.round(Math.random()*50 + 1);
  array.push(num);
}

var flag = true;
while(flag){
	console.log("Array: " + array);
	console.log("flag: "+flag);
	do{
		var risposta = parseInt(prompt("Immetti un valore\n maggiore di 1\ne minore di 50"));
	}while(risposta < 2 || risposta > 50);
	for(var i = 0; i < n; i++){
		for(j = risposta; j < 51; j += risposta){
			if(array[i] == j) array[i] = 0;
		}
	}
	
	flag = false;
	for(var j = 0; j < n; j++){
		if(array[j] > 0)  flag = true;
	}
}

