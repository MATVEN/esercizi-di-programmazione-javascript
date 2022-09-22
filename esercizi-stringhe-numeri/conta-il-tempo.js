/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

const secTot = 12560;
const secInMin = 60;
const minInOra = 60;

var secInOra = secInMin * minInOra;
var ore = Math.ceil(secTot / secInOra);
var secInOre = secInOra * ore;
var secRim = secTot - secInOre;
var minuti = Math.ceil(secRim / secInMin);
var secondi = secRim - (minuti * minInOra);

console.log(`In {$secTot} ci sono {$ore} ore, {$minuti} minuti e {$secondi} secondi.`);
