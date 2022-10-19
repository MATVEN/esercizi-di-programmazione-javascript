/*
  Pa-pa-pa lindomo
  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.

  Esempio:
    Input: i topi non avevano nipoti
    Output: TRUE


  Consigli:
  Puoi eliminare spazi e segni di punteggiatura usando le espressioni regolari o il metodo del tipo stringa chiamato replace,
  in questo modo: str.replace(/\W/g, "").

  http://www.imparareaprogrammare.it
*/

/* METODO 1 */

var frase = 'eri un nano non annuire.'
var parola = frase.replace(/\W/g, "");
console.log(parola);

function invertiParola(parola){
  var strInversa = parola.split('').reverse().join('');  
  
  if(parola == strInversa){
    return true
  } else {
    return false
  }
}

console.log(invertiParola(parola));

/* METODO 2 */

var frase = 'eri un nano non annuire.'
var parola = frase.replace(/\W/g, "");
console.log(parola);
  
function invertiParola(parola) {
  var parolaInversa = '';
  var i = parola.length - 1;
  
  while (i >= 0) {
    parolaInversa += parola[i];
    i--;
  }

  if(parola == parolaInversa){
    return true
  } else {
    return false
  }
}

console.log(invertiParola(parola));
