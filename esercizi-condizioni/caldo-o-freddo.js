/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/

var a = 10
var b = -2
var c = 31
var d = 22
var e = 15
var f = -6
var g = 7
var gCalda = Math.max(a, b, c, d, e, f, g);
var gFredda = Math.min(a, b, c, d, e, f, g);

switch(gCalda){   
  case a:
    console.log('Giornata più calda: ' + a + '°');
    break;
  case b:
    console.log('Giornata più calda: ' + b + '°');
    break;
  case c:
    console.log('Giornata più calda: ' + c + '°');
    break;
  case d:
    console.log('Giornata più calda: ' + d + '°');
    break;
  case e:
    console.log('Giornata più calda: ' + e + '°');
    break;
  case f:
    console.log('Giornata più calda: ' + f + '°');
    break;
  case g:
    console.log('Giornata più calda: ' + g + '°');
    break;
}

switch(gFredda){   
  case a:
    console.log('Giornata più calda: ' + a + '°');
    break;
  case b:
    console.log('Giornata più calda: ' + b + '°');
    break;
  case c:
    console.log('Giornata più calda: ' + c + '°');
    break;
  case d:
    console.log('Giornata più calda: ' + d + '°');
    break;
  case e:
    console.log('Giornata più calda: ' + e + '°');
    break;
  case f:
    console.log('Giornata più calda: ' + f + '°');
    break;
  case g:
    console.log('Giornata più calda: ' + g + '°');
    break;
}
