/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/


var voto = 28;

if(voto < 18){
 console.log('Insufficiente');
} else if(18 <= voto && voto < 21){
 console.log('Sufficiente');
} else if(21 <= voto && voto < 24){
 console.log('Buono');
} else if(24 <= voto && voto < 27){
 console.log('Distinto');
} else if(27 <= voto && voto < 29){
 console.log('Ottimo');
} else {
 console.log('Eccellente');
}

//Versione Switch-Case

switch(voto){   
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:  
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 17:  
    console.log('Insufficiente');
    break;
  case 18:
  case 19:
  case 20:  
    console.log('Sufficiente');
    break;
  case 21:
  case 22:
  case 23:
    console.log('Buono');
    break;
  case 24:
  case 25:
  case 26:    
    console.log('Distinto');
    break;
  case 27:
  case 28:
  case 29:
    console.log('Ottimo');
    break;
  case 30:
    console.log('Eccelente');
    break;
  default:
    console.log('Voto inserito non valido');
}
