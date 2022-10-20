/*
  Fai il sensitivo
  Scrivi una funzione che calcoli la vicinanza tra tre numeri: A, B e N, e restituisca:
    - 0 Se A e B sono equidistanti da N
    - 1 Se B è più vicino a N rispetto ad A
    - -1 Se A è più vicino a N rispetto a B

  Variante:
  Utilizza questa funzione per creare un programma che simuli un gioco tra due utenti:
  vince chi indovina per primo il numero N che verrà generato casualmente tra 1 e 100.

  Consigli per la variante:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Se non ricordi come richiedere all'utente un valore in input, rivedi l'esercizio sugli array "Azzecca e azzera"

  http://www.imparareaprogrammare.it
*/

function vicinanzaNumeri(a, b ,n){
  
  var diffA = Math.abs(n - a);
  var diffB = Math.abs(n - b);
  console.log(diffA + ' - ' + diffB);

  if(diffA == diffB){
    return 0;
  }else if(diffB < diffA){
    return 1
  }else{
    return -1
  }
}

console.log(vicinanzaNumeri(a, b ,n));

/* VARIANTE */
var n = Math.floor(Math.random() * 100);
console.log('N: ' + n);

function inovinaNumero(n){
  
  var flag = true;
  while(flag){
    do{
      var giocatore1 = parseInt(prompt("Giocatore 1 scrivi un numero\n maggiore di 1\ne minore di 100"));
      var giocatore2 = parseInt(prompt("Giocatore 2 scrivi un numero\n maggiore di 1\ne minore di 100"));

      var diffA = Math.abs(n - giocatore1);
      var diffB = Math.abs(n - giocatore2);

      if(diffA < diffB){
        alert("Il giocatore 1 ci è andato vicino!");
      }else if(diffB < diffA){
        alert("Giocatore 2 ci è andato vicino!");
      }
    }while(
      giocatore1 == n || giocatore2 == n
    )

    if(giocatore1 == n){
      return prompt('Il giocatore 1  ha vinto!');
    }else if(giocatore2 == n){
      return prompt("Il giocatore 2 ha vinto!");
    }
  }
}

console.log(inovinaNumero(n));
