/*
  Le tabelline nel tabellone
  Scrivi un programma che stampi il tabellone delle tabelline, da 0 a 10.
  In questo modo:
    x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0
    1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    2 | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20
    ...
    10 | 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
    
  http://www.imparareaprogrammare.it
*/

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var res = [];

for(var i = 0; i <= arr.length-1; i++){
  var mUno = arr[i];
  res[mUno] = [];
  for(var j = 0; j <= arr.length-1; j++){
    var mDue = arr[j];
    res[mUno].push(mUno * mDue);
  }
  res[mUno].join(' | ');
}

console.log(arr + '\n' + res.join('\n'));

/* METODO 2 */

var tabelline = [];
for(var i = 0; i < 10; i++){
	tabelline[i] = [];
}

var tabellone = 'x';
for(j = 0; j < 11; j++){
	tabellone += ' | ' + j;
}

tabellone += '\n';

for(i = 0; i < 11; i++){
	tabellone += i;
	for(j = 0; j < 11; j++){
		tabellone += ' | ' + i*j;
	}
	tabellone += '\n';
}

console.log(tabellone);

/* METODO 3 */

var matrice = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]];
var tabellone = '';

for(var i = 0; i < matrice.length; i++){
  for(var j = 0; j < matrice[i].length; j++){
    
  }
}

console.log(tabellone);
