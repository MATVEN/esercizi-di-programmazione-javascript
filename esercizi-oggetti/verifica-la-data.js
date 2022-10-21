/*
  Verifica la data
  Scrivi un programma che definisca un oggetto per la rappresentazione di una data e verifichi se è valida o meno.
  L'oggetto sarà composto da giorno, mese e anno (input a piacere).

  Esempio:
    Input:
      day: 18
      month: 19
      year: 2016
    Output:
      "La data non è valida!"

  http://www.imparareaprogrammare.it
*/

var data = {
  giorno: Math.floor(Math.random() * 31) + 1,
  mese: Math.floor(Math.random() * 12) + 1,
  anno: 2022
}

var invalidData = 'La data non è valida!';

if(data.giorno > 31 && data.mese > 12){
  console.log(invalidData)
}else if(data.giorno > 28 && data.mese == 2){
  console.log(invalidData)
}else if(data.giorno > 30 && data.mese == 4){
  console.log(invalidData)
}else if(data.giorno > 30 && data.mese == 6){
  console.log(invalidData)
}else if(data.giorno > 30 && data.mese == 9){
  console.log(invalidData)
}else if(data.giorno > 30 && data.mese == 11){
  console.log(invalidData)
}else{
  console.log(data.giorno + '/' + data.mese + '/' + data.anno);
}
