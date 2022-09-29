/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/
var arrNum = [7, 15, 10, 1, 4]
var somma = arrNum[0] + arrNum[1] + arrNum[2] + arrNum[3] + arrNum[4]
var media = somma / arrNum.length
var valMin = arrNum.filter(function filteredNumb (number) {  
    return number < media;  
})

console.log('Media: ' + media + ' - Valori Minori: ' + valMin)
