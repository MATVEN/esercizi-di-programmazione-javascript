/*
  Che giorno è oggi?
  Scrivi un programma che dato un numero intero compreso tra 1 a 7
  visualizzi il corrispondente giorno della settimana. Sapendo che:
    1 = lunedì
    2 = martedì
    3 = mercoledì
    ...
    7 = domenica
  Utilizza il costrutto Switch-case e prevedi anche il caso in cui il valore immesso non sia valido
  (nel caso stampare un messaggio di errore a tua scelta).

  Esempi:
    Input: numero = 6
    Output: "Sabato"

    Input: numero = 10
    Output: "Errore! Giorno della settimana non valido!"

  Variante:
  Scrivere una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.

  http://www.imparareaprogrammare.it
*/

var giorno = 4;

switch(giorno){   
  case 1:
    console.log('Oggi è Lunedì');
    break;
  case 2:
    console.log('Oggi è Martedì');
    break;
  case 3:
    console.log('Oggi è Mercoledì');
    break;
  case 4:
    console.log('Oggi è Giovedì');
    break;
  case 5:
    console.log('Oggi è Venerdì');
    break;
  case 6:
    console.log('Oggi è Sabato');
    break;
  case 7:
    console.log('Oggi è Domenica');
    break;
  default:
    console.log('Errore! Giorno della settimana non valido!');
}
/* VARIANTE */

var mese = 4;

switch(giorno){   
  case 1:
    console.log('Siamo nel mese di Gennaio');
    break;
  case 2:
    console.log('Siamo nel mese di Febbraio');
    break;
  case 3:
    console.log('Siamo nel mese di Marzo');
    break;
  case 4:
    console.log('Siamo nel mese di Aprile');
    break;
  case 5:
    console.log('Siamo nel mese di Maggio');
    break;
  case 6:
    console.log('Siamo nel mese di Giugno');
    break;
  case 7:
    console.log('Siamo nel mese di Luglio');
    break;
  case 8:
    console.log('Siamo nel mese di Agosto');
    break;
  case 9:
    console.log('Siamo nel mese di Settembre');
    break;
  case 10:
    console.log('Siamo nel mese di Ottobre');
    break;
  case 11:
    console.log('Siamo nel mese di Novembre');
    break;
  case 12:
    console.log('Siamo nel mese di Dicembre');
    break;
  default:
    console.log('Errore! Mese non valido!');
}
