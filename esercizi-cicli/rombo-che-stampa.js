/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
  http://www.imparareaprogrammare.it
*/

var risposta = '';
var vettore = Array();
var nDispari = 5;
if(nDispari %2 ==0) nDispari++;
var copiaNumeroDispari = nDispari;
	
var i = 1; //i indica il numero di pallette
while(nDispari > 0){
  var tab = Math.floor(nDispari / 2);
  for(var k = 0;k < tab; k++){
    risposta += '  '; //mette le tabulazioni di indentazione
  }
  
  var j = i; 
  while(j > 0){
    risposta += 'X';
    j--;
  }
  risposta += '\n';
  i += 2;
  nDispari -= 2;
}
	
i = copiaNumeroDispari - 2; //indica il numero di pallette da mettere
nDispari = copiaNumeroDispari;
tab = 1;

while(nDispari > 0){
  for(k = 0; k < tab; k++){	
    risposta += '  '; //mette le tabulazioni di indentazione
  }
  tab++;
  
  j = i;
  while(j > 0){
    risposta += 'X';
    j--;
  }
  risposta += '\n';
  i -= 2;
  nDispari -= 2;
}

alert(risposta);
