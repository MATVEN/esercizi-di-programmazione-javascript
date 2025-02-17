/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

var gUno = 0;
var gDue = 0;
var tiri = 3;
var dadoGUno = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
var dadoGDue = Math.floor(Math.random() * (6 - 1 + 1) ) + 1;

for (var i = 0; i < tiri; i++) {
  gUno += dadoGUno
  gDue += dadoGDue
}

if(gUno == gDue){
	console.log('La partita termina in parità, entrambi hanno totalizzato: ' + gUno + ' punti');
} else if(gUno < gDue){
	console.log('Il giocatore2 vince! Ha totalizzato: ' + gDue + ' punti\nIl giocatore1 ha totalizzato: ' + gUno + ' punti');
} else{
	console.log('Il giocatore1 vince! Ha totalizzato: ' + gUno + ' punti\nIl giocatore2 ha totalizzato: ' + gDue + ' punti');
}
