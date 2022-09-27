/*Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.
  

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/

var numero = Math.floor(Math.random() * 11);
var tavola = '';

for (var i = 0; i < 11; i++) {
  tavola += numero * i + ' - ';
  if(i % 10 == 0) tavola += numero * i;
}

console.log(tavola);
