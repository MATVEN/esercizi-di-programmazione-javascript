/*
  Metti un po' d'ordine
  Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

  Variante:
  Prova ad ordinali in modo crescente.

  Consigli:
  Ti consiglio di non usare il metodo sort per questo esercizio ma di provare a scrivere tu il codice per ordinare gli array,
  usando if e cicli ;)

  http://www.imparareaprogrammare.it
*/

var array = [3, 7, -6, 5, 8, 1, 2, 10, 6, -9];

for(var i = 0; i < array.length; i++){
  for(var j = 0; j < i; j++){
    if(array[i] < array[j]){
      var x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
  }
}

console.log(array);
