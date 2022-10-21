/*
  Un bel garage
  Scrivi un programma per la gestione di un garage.
  Definisci un oggetto che rappresenti un automobile, dovrà contenere almeno marca del veicolo e nome del modello.
  Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

  Consigli:
  Puoi usare un array come base per salvare le automobili.

  http://www.imparareaprogrammare.it
*/

var car = {
  marca: 'BMW',
  modello: ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'iX', 'iX3']
}

function carInGarage(car){
  return car.modello
}

console.log(carInGarage(car))
