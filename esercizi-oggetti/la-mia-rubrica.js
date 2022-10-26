/*
  La mia rubrica
  Scrivi un programma per la gestione di una rubrica telefonica.

  Definisci un oggetto che rappresenti un contatto e, visto che stai diventando bravo/a, le proprietà dell'oggetto sono a tua discrizione.
  L'unico vincolo che hai è di inserire almeno il nome e il numero di telefono come stringhe.

  Definisci un altro oggetto che rappresenti la lista dei contatti, quindi sarà formato da un array di contatti.
  Implementa i metodi dell'oggetto per le seguenti operazioni:
      - Visualizzazione dell'intera lista contatti
      - Inserimento di un nuovo contatto
      - Modifica di uno contatto passando in input l'indice dell'array
      - Cancellazione di un contatto passando in input l'indice dell'array
      - Ricerca passando il nome e restituendo il singolo contatto.

  Variante:
  Migliora i metodi di Modifica e Cancellazione, al posto di prendere in input l'indice dell'array passa in input il nome
  e ricava l'indice sul quale applicare l'operazione.

  http://www.imparareaprogrammare.it
*/

var contatto = {
  nome: 'Mattia',
  cognome: 'Vena',
  cellulare: '3331995970',
  mail: 'mattia.vena@hotmail.it',
  via: 'Via Pasturana 9',
  compleanno: '2 Settembre'
};

var rubrica = [
  contatto1 = {
    nome: 'Andrea',
    cognome: 'Raineri',
    cellulare: '3331995870',
    mail: 'ragno@hotmail.it',
    via: 'Via Allerite 56',
    compleanno: '15 Giugno'
  },
  contatto2 = {
    nome: 'Mattia',
    cognome: 'Scacitelli',
    cellulare: '3309995970',
    mail: 'scacio@hotmail.it',
    via: 'Via Ofander 7',
    compleanno: '20 Febbraio'
  },
  contatto3 = {
    nome: 'Federico',
    cognome: 'Di Eugenio',
    cellulare: '3331775970',
    mail: 'deug@hotmail.it',
    via: 'Via Giorizao 64',
    compleanno: '3 Dicembre'
  }
];

console.log(rubrica);

contatto4 = {
  nome: 'Leonardo',
  cognome: 'Visonà',
  cellulare: '3331276970',
  mail: 'leovis@hotmail.it',
  via: 'Via Franciastretta 38',
  compleanno: '27 Dicembre'
}

rubrica.push(contatto4);
console.log(rubrica);

rubrica[1].cognome = 'Scascitelli'
console.log(rubrica.contatto2);

delete rubrica[0];
console.log(rubrica);

var found = rubrica.filter(e => e.nome === 'Leonardo');
if (found.length > 0) {
    console.log(found[0]);
}
