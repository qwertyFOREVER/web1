
// 4.1 Квадрат
function triangle_aa() {
    let a = window.prompt("Введите длину стороны квадрата", "");

    if (a > 0) {
        window.alert("Ответ: Площадь квадрата - " + a * a);
    } else {
        window.alert("Введены неверные данные.Попробуйте снова!");
    }
}

function triangle_ad() {
    let d = window.prompt("Введите длину диагонали квадрата", "");
    if (d > 0) {
        window.alert("Ответ: Площадь квадрата - " + (d * d) / 2);
    } else {
        window.alert("Введены неверные данные.Попробуйте снова!");
    }
}

//  4.2 Простые числа
function eazy() {
    let str = "";
    let l = 0;
    let N = + window.prompt("Введите N ", "");
    if (N > 0) {
      for(i = 0; i < N+1; i++){
        for(k = 0; k < i+1; k++){
          if(i%k == 0) l++;
        }
        if (l == 2 || l == 1) str += i + " ";
        l = 0;
      }
      window.alert("Ответ: " + str);
  } else {
      window.alert("Введены неверные данные.Попробуйте снова!");
  }
}

// 4.3 Массивы
function mass(){
  let matrice = new Array(3);
  let sred_znach = 0;
  for (let i = 0; i < 3; i++) {
      matrice[i] = new Array(3);
        for (let j = 0; j < 3; j++) {
          matrice[i][j] = GetRandomInt(-10, 10);
      }
  }

  for (let i = 1; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      sred_znach += sred_znach + matrice[i][j];
    }
  }
  sred_znach = sred_znach / 9;

  for (let i = 1; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matrice[i][j] = matrice[i][j] - sred_znach;
    }
  }

  for (let i = 0; i < 3; i++) {
    console.log(matrice[i]);
  }
}
// 4.4 Функции

function GetRandomInt( max,  min) {
  return Math.floor( min +  Math.random() * (max +  1 - min) );
}

function getArray( n){
let array =  new Array(n);
for (let i =  0;  i <  n;  i++ ) {
  array[ i]  =  GetRandomInt( 0,  10 );
}
return array
}

function getResultArray( a,  b) {
  return a.sort(( a,  b)  =>  a - b)
}

// Квадратная матрица

let table =  document.querySelector('#table');
let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]; /* n = 3 */
arr =  getResultArray(arr);
fillTable( table,  arr);

function fillTable( table,  arr) {
let n =  Math.sqrt( arr.length);
let matrice2 =  new Array(n);
let iter =  0;

for (let i =  0;  i <  n;  i++ ) {
    matrice2[ i]  =  new Array(n);
      for ( let j =  0;  j <  n;  j++ ) {
        matrice2[i][j] = n;
    }
}
for(let i =  0;  i <  n;  i++ ){
  for( let j =  0;  j <  n;  j++ ){
    matrice2[ i] [ j]  =  arr[ iter];
    iter++;
  }
  if ((i +  1) % 2  ==  0 ){
    matrice2[ i]  =  matrice2[ i].reverse( );
  }
}
matrice2 =  matrice2.reverse()
for (let i =  0;  i <  n;  i++ ) {
    let tr =  document.createElement('tr');
    for ( let j =  0;  j <  n;  j++ ) {
      let td =  document.createElement('td');
      td.innerHTML = matrice2[i][j];
      tr.appendChild(td);
      }
  table.appendChild(tr);
}
}
