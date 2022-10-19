/*
  Il genio delle date
  Scrivi una funzione che prenda in input due argomenti: il giorno e il mese.
  La funzione deve restituire a quale giorno dell'anno corrisponde (compreso tra 1 e 366).

  Esempio:
    Input : giorno = 5, mese = 2
    Output:
            36

  Consigli:
  Puoi definire un array con i giorni di ogni mese e ciclarlo.

          
  http://www.imparareaprogrammare.it
*/

var mese = Math.floor(Math.random() * 12) + 1;

/* if(mese == 2){
  var nGiorni = 28;
}else if(mese == 4 || mese == 6 || mese == 9 || mese == 11){
  var nGiorni = 30;
}else{
  var nGiorni = 31;
} */

switch(mese){   
  case 2:
    var nGiorni = 28;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    var nGiorni = 30;
    break;
  default:
    var nGiorni = 31;
}

var giorno = Math.floor(Math.random() * nGiorni) + 1;

console.log(nGiorni + ' - ' + mese + ' - ' + giorno);

function giornoDellAnno(giorno, mese){
  
  var giorniMese = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30 ,31];
  var contatore = 0;
  for(var i = 0; i < mese - 1; i++){
    contatore += giorniMese[i];
  }
  
  return contatore + giorno;
}

console.log('Il ' + giorno + '/' + mese + ' corrisponde al ' + giornoDellAnno(giorno, mese) + '° giorno dell\'anno');
