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

var Rubrica = {
  nome: ['Jacopo', 'Mattia', 'Federico', 'Stefano', 'Leonardo', 'Lorenzo', 'Andrea'],
  cognome: ['Di Biagio', 'Scascitelli', 'Di Eugenio', 'Trinca', 'Visonà', 'Bragaglia', 'Raineri'],
  cellulare: ['3471958970','3921921970','3311999870','3391785970','3201665970','3381995570','3331995971'],
  mail: ['jacopo.db@hotmail.it','mattia.scascio@hotmail.it','fede.venadeughotmail.it','ste.trinca@hotmail.it','leo.vis@hotmail.it','lollo.brago@hotmail.it','andrea.ragno@hotmail.it'],
  via: ['Via Stazione 7', 'Via Alleva 228', 'Via Matricia 26', 'Via Parma 47', 'Via Trenio 9', 'Via Cicero 34', 'Via Offerta 78', 'Via Oslo 337', 'Via Retro 10'],
  compleanno: ['26 Febbraio', '20 Febbraio', '3 Dicembre', '12 Gennaio','27 Dicembre', '14 Agosto', '15 Giugno']
};
