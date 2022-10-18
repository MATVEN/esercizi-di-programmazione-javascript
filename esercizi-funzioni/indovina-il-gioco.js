/*
  Indovina il giorno
  Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifica se sia compreso nel range da 1 a 7.
  Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.

  La seconda funzione:
  - nel caso la prima restituisca TRUE visualizza il giorno della settimana corrispondente,
    considerando la seguente corrispondenza:
        1 = Lunedì
        ...
        7 = Domenica
  - nel caso il giorno non sia compreso nel range, la funzione dovrà restituire un messaggio d'errore simile a questo: 'Peccato, non posso indovinare il giorno.'


  http://www.imparareaprogrammare.it
*/

var number = Math.round(Math.random()*10 + 1);
	
function verify(number){
  if(number >= 1 && number <= 7){
    return true
  }else{
    return false;
  }
}

console.log(number + ' - ' + verify(number))

var result = verify(number);

function cerca(number){
  var week = ['Lunedi','Martedi','Mercoledi','Giovedi','Venerdi','Sabato','Domenica'];
  return(week[number-1]);
}

if(result){
  var dWeek = cerca(number,result);
  console.log(dWeek);
}else{
  console.log("Peccato, non posso indovinare il giorno.");
}
