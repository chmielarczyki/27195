let name = 'Iga';
let surname = 'Chmielarczyk';

/* 27195 */
console.log('Uwielbiam JavaScript');

/* 27196 */
let array = [1, 6, 33, 88, 909];

/* 27197 */
let a = 2;
let b = 4;
let c = 6;

let abc = [a, b, c];

console.log(abc);

/* 27198 */
alert('Skrypt działa prawidłowo');

/* 27199 */

let num = 12;

if (num > 10) {
    console.log('Podana liczba jest większa od 10');
} else {
    console.log('Podana liczba jest mniejsza od 10');
}

/* 27200 */

let firstNumber;
let secondNumber;

function adding(firstNumber, secondNumber) {
    let suma = firstNumber + secondNumber;
    return suma;
}

console.log(adding (44, 33));

/* 27201 */

let paragraf = document.querySelector('p');
paragraf.textContent='Dodawanie tekstu';

/* 27202 */
let button = document.querySelector('button');
button.onclick = function() {
    alert('Klik działa!');
} 
