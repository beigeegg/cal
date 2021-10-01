const display = document.querySelector('#display');

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');

btn1.addEventListener('click', ev1)
function ev1() 
{display.innerText = btn1.innerText;}

btn2.addEventListener('click', ev2)
function ev2() 
{display.innerText = btn2.innerText;}

btn3.addEventListener('click', ev3)
function ev3() 
{display.innerText = btn3.innerText;}