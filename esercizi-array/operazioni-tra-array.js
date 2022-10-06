/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".


  http://www.imparareaprogrammare.it
*/

var n = 10;
var arrUno = [];
var arrDue = [];
var operazione = 'addizione';
var risultato = [];

for (i = 1; i < n; i++) {
  num = Math.round(Math.random()*10 + 1);
  arrUno.push(num);
  num = Math.round(Math.random()*10 + 1);
  arrDue.push(num);
}

for(i=0; i<n; i++){
		if(operazione == 'addizione') risultato[i] = arrUno[i] + arrDue[i];
		else if(operazione == 'sottrazione') risultato[i] = arrUno[i] - arrDue[i];
		else if(operazione == 'moltiplicazione') risultato[i] = arrUno[i] * arrDue[i];
		else{ 
      risultato[i] = Math.round(arrUno[i] / arrDue[i]*100)/100;
    }
	}

console.log(arrUno + '\n' + arrDue + '\n' + risultato);
