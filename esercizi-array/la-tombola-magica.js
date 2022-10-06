/*
  La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

var n = 10;
var arrUno = [];
var arrDue = [23,73,52,42,27,2,10,67,80,39];

for(var i = 0; i < n; i++){
	num = Math.round(Math.random()*15 + 1);
	flag = true;
	for(var j = 0; j < arrUno.length; j++){
	  if(arrUno[j] == num)	flag = false;
	}
	var controllo = flag;
	(flag) ? arrUno[i] = num : i--;
}

var cont = 0;
for(var i = 0; i < n; i++){
	num = arrUno[i];
	for(var j = 0; j < n; j++){
		if(num == arrDue[j]){
			cont++;
		}
	}
}

if(cont == 2) console.log("Ambo");
else if(cont == 3) console.log("Terna");
else if(cont == 4) console.log("Quaterna");
else if(cont == 5) console.log("Cinquina");
else if(cont == 10) console.log("Tombola");
else console.log("Mi dispiace, hai perso!");

console.log(arrUno + '\n' + arrDue + '\n' + cont);
