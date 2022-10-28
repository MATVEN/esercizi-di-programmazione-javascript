/*
  Il carcere di Gotham City
  Sei appena stato nominato direttore presso il carcere di Gotham City.
  Hai l'arduo compito di scrivere un programma che gestisca:
  - I dati anagrafici delle guardie
  - I dati anagrafici dei detenuti
  - I fascicoli personali dei detenuti, che devono contenere almeno queste informazioni:
      - Un identificativo del criminale
      - La data di carcerazione
      - La data di scarcerazione
      - Il crimine commesso

  Visto che sei tu il capo, decidi se usare lo stesso oggetto per gestire sia le guardie che i criminali.
  In ogni caso dovrai definire la banca dati della prigione: crea un array di guardie, uno di detenuti e uno per i fascicoli.

  Prevedi la possibilià di:
    - Assumere nuove guardie
    - Schedare nuovi carcerati
    - Aggiungere nuovi fascicoli
    - Visualizzare l'elenco per ciascuna categoria (guardie, criminali, fascicoli)
    - Effettuare ricerche nei fascicoli per nome del detenuto

  Nel carcere di Gothma City non tutti i detenuti arrivano alla data di scarcerazione,
  gestisci l’eventualità in cui un detenuto sia evaso e quella in cui sia deceduto.

  Scrivi una funzione di riepilogo dell'andamento del carcere e che stampi:
    - il numero delle guardie,
    - il numero di detenuti totali,
    - il numero di detenuti evasi,
    - il numero di detenuti deceduti all’interno della struttura.

  http://www.imparareaprogrammare.it
*/

function generateRandomString(iLen) {
  var sRnd = '';
  var sChrs = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  for (var i = 0; i < iLen; i++) {
    var randomPoz = Math.floor(Math.random() * sChrs.length);
    sRnd += sChrs.substring(randomPoz, randomPoz + 1);
  }
  return sRnd;
}

var stringaRandomDetenuto = generateRandomString(24);
var nNuoviDetenuti = prompt('Inserisci il numero di nuovi detenuti da inserire');

//DETENUTI
const detenuti = [
  {
    id: "5b21ca3eeb7f6fbccd471815",
    nome: 'Sconosciuto',
    cognome: 'Sconosciuto',
    sesso: 'Uomo',
    residenza: 'Gotham City',
  },
  {
    id: "5b21ca3eeb7f6fbccd471816",
    nome: 'Harvey',
    cognome: 'Dent',
    sesso: 'Uomo',
    residenza: 'Gotham City',
  },
  {
    id: "5b21ca3eeb7f6fbccd471817",
    nome: 'Selina',
    cognome: 'Kyle',
    sesso: 'Donna',
    residenza: 'Gotham City',
  },
  {
    id: "5b21ca3eeb7f6fbccd471819",
    nome: 'Sconosciuto',
    cognome: 'Sconosciuto',
    sesso: 'Uomo',
    aliasDetenuto: "Bane",
    residenza: 'Gotham City',
  },
  {
    id: "5b21ca3eeb7f6fbccd47181a",
    nome: 'Oswald',
    cognome: 'Chesterfield Cobblepot',
    sesso: 'Uomo',
    residenza: 'Gotham City',
  },
  {
    id: "5b21ca3eeb7f6fbccd47181b",
    nome: 'Eddie',
    cognome: 'Nashton',
    sesso: 'Uomo',
    residenza: 'Gotham City',
  },
  {
    id: "5b21ca3eeb7f6fbccd47181e",
    nome: 'Pamela Lillian',
    cognome: 'Isley',
    sesso: 'Donna',
    residenza: 'Gotham City',
  },
  {
    id: "5b21ca3eeb7f6fbccd47181f",
    nome: 'Harleen',
    cognome: 'Quinzel',
    sesso: 'Donna',
    residenza: 'Gotham City',
  },
  {
    id: "5b21ca3eeb7f6fbccd471821",
    nome: 'Victor',
    cognome: 'Fries',
    sesso: 'Uomo',
    residenza: 'Gotham City',
  },
];

for (var i = 0; i < nNuoviDetenuti; i++){
  var detenuto = {
    id: stringaRandom,
    nome: prompt('Inserisci il nome del detenuto'),
    cognome: prompt('Inserisci il cognome del detenuto'),
    sesso: prompt('Inserisci il sesso del detenuto'),
    residenza: prompt('Inserisci la residenza del detenuto'),
  }
  detenuti.push(detenuto);
}

for (var i = 0; i < detenuti.length; i++){
  console.log(detenuti[i]);
}

//GUARDIE

var nNuoveGuardie = prompt('Inserisci il numero di nuove guardie da inserire');

const guardie = [
    {
      id: '5bdefd471815',
      nome: 'Hank',
      cognome: 'McCoy',
      sesso: 'Uomo',
    },
    {
      id: '5brgtd471816',
      nome: 'Earl',
      cognome:'Campbell',
      sesso: 'Uomo',
    },
    {
      id: '5bdefd471817',
      nome: 'Dwayne',
      cognome: 'Williams',
      sesso: 'Uomo',
    },
    {
      id: '5brgtd471819',
      nome: 'Jean',
      cognome: 'Bells',
      sesso: 'Donna',
    },
    {
      id: '5brgtd47181a',
      nome: 'Misty',
      cognome: 'Hart',
      sesso: 'Donna',
    },
    {
      id: '5bdefd47181b',
      nome: 'Ray',
      cognome: 'Lee',
      sesso: 'Uomo',
    },
    {
      id: '5bdefd47181e',
      nome: 'Emily',
      cognome: 'Kline',
      sesso: 'Donna',
    },
    {
      id: '5brgtd47181f',
      nome: 'Sean',
      cognome: 'Coltrain',
      sesso: 'Uomo',
    },
    {
      id: '5brgtd471821',
      nome: 'Johnny',
      cognome: 'Wade',
      sesso: 'Uomo',
    },
    {
      id: '1bdefd471815',
      nome: 'Nelson',
      cognome: 'Davis',
      sesso: 'Uomo',
    },
    {
      id: '2bdefd471816',
      nome: 'Michael',
      cognome: 'Pitts',
      sesso: 'Uomo',
    },
    {
      id: '3brgtd471817',
      nome: 'Audrey',
      cognome: 'West',
      sesso: 'Donna',
    },
    {
      id: '4bdefd471819',
      nome: 'Gale',
      cognome: 'Miller',
      sesso: 'Donna',
    },
    {
      id: '0badsd47181a',
      nome: 'Cole',
      cognome: 'Hills',
      sesso: 'Uomo',
    },
    {
      id: '6brgtd47181b',
      nome: 'Walter',
      cognome: 'Travis',
      sesso: 'Uomo',
    },
    {
      id: '7badsd47181e',
      nome: 'Orville',
      cognome: 'Lovett',
      sesso: 'Uomo',
    },
    {
      id: '8badsd47181f',
      nome: 'Conor',
      cognome: 'Spencer',
      sesso: 'Uomo',
    },
    {
      id: '9badsd471821',
      nome: 'Sandra',
      cognome: 'Dixon',
      sesso: 'Donna',
    },
  ];

for (var i = 0; i < nNuoveGuardie; i++){
  var guardia = {
    id: generateRandomString(12),
    nome: prompt('Inserisci il nome del nuovo operatore carcerario'),
    cognome: prompt('Inserisci il cognome del nuovo operatore carcerario'),
    sesso: prompt('Inserisci il sesso del nuovo operatore carcerario'),
  }
  guardie.push(guardia)
}

for (var i = 0; i < guardie.length; i++){
  console.log(guardie[i]);
}


//FASCICOLI

var nNuoviFascicoli = prompt('Inserisci il numero di nuovi fascicoli da inserire');

const fascicoli = [
    {
      id: '5b21ca3eeb7f6fbccd471815',
      aliasDetenuto: 'Joker',
      crimine: 'Psicopatico',
      stato: 'Evaso',
      dataCarcerazione: '01/02/2021',
      dataScarcerazione: 'Mai',
    },
    {
      id: '5b21ca3eeb7f6fbccd471816',
      aliasDetenuto: 'Due Facce',
      crimine: 'Omicidio',
      stato: 'Deceduto',
      dataCarcerazione: '01/02/2021',
      dataScarcerazione: '01/02/2041',
    },
    {
      id: '5b21ca3eeb7f6fbccd471817',
      aliasDetenuto: 'Catwoman',
      crimine: 'Furto',
      stato: 'Evaso',
      dataCarcerazione: '01/02/2021',
      dataScarcerazione: '01/02/2026',
    },
    {
      id: '5b21ca3eeb7f6fbccd471819',
      aliasDetenuto: 'Bane',
      crimine: 'Cospirazione',
      stato: 'Deceduto',
      dataCarcerazione: '01/02/2021',
      dataScarcerazione: 'Mai',
    },
    {
      id: '5b21ca3eeb7f6fbccd47181a',
      aliasDetenuto: 'Pinguino',
      crimine: 'Mafia',
      stato: 'In detenzione',
      dataCarcerazione: '01/02/2021',
      dataScarcerazione: '01/02/2051',
    },
    {
      id: '5b21ca3eeb7f6fbccd47181b',
      aliasDetenuto: 'Enigmista',
      crimine: 'Truffa',
      stato: 'In detenzione',
      dataCarcerazione: '01/02/2021',
      dataScarcerazione: '01/02/2031',
    },
    {
      id: '5b21ca3eeb7f6fbccd47181e',
      aliasDetenuto: 'Poison Ivy',
      crimine: 'Eco-terrorismo',
      stato: 'In detenzione',
      dataCarcerazione: '01/02/2021',
      dataScarcerazione: '01/02/2046',
    },
    {
      id: '5b21ca3eeb7f6fbccd47181f',
      aliasDetenuto: 'Harley Quinn',
      crimine: 'Psicopatica',
      stato: 'Evaso',
      dataCarcerazione: '01/02/2021',
      dataScarcerazione: 'Mai',
    },
    {
      id: '5b21ca3eeb7f6fbccd471821',
      aliasDetenuto: 'Mr. Freeze',
      crimine: 'Rapina',
      stato: 'In detenzione',
      dataCarcerazione: '01/02/2021',
      dataScarcerazione: '01/02/2036',
    },
  ];

for (var i = 0; i < nNuoviFascicoli; i++){
  var fascicolo = {
    id: stringaRandom,
    aliasDetenuto: prompt('Inserisci il nome o l\'alias del detenuto'),
    crimine: prompt('Inserisci il crimine commesso'),
    stato: 'In detenzione',
    dataCarcerazione: prompt('Inserisci la data di incarcerazione'),
    dataScarcerazione: prompt('Inserisci la data di scarcerazione'),
  }
  fascicoli.push(fascicolo);
}

for (var i = 0; i < fascicoli.length; i++){
  console.log(fascicoli[i]);
}

var filtro = prompt('Inserisci il nome o l\'alias del detenuto da cercare');
var found = fascicoli.filter(e => e.aliasDetenuto === filtro);
if (found.length > 0) {
    console.log(found[0]);
}
