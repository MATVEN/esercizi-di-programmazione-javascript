/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

const anno = 2022;
const annoNascita = 1993;
const cento = 100;

var eta = anno - annoNascita;
var anniCent = cento - eta;

console.log(`Sono nato nel {$annoNascita} e nel {$anno} ho compiuto {$eta} anni, tra {$anniCent} anni ne avò {$cento}`);
