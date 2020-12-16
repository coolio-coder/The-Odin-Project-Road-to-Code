'use strict';

//State the constants
const calInput = document.querySelectorAll('button');


let inputNum = n => {
    console.log('numbers.query')
    let input = document.querySelectorAll('n');
    console.log(input.textContent)
}

let test = () => {
    console.log('hello world')
}

const operations = () => {
    console.log('operations')
}

const reset = () => {
    console.log('reset');
}

//Evaluate the button for each 
calInput.forEach(function(e) {
    if(e.className === 'numbers') {e.addEventListener('click', inputNum);}
    else if (e.className === 'operations') {e.addEventListener('click', operations);}
    else if (e.className === 'reset') {e.addEventListener('click', reset)}
    else if (e.className === 'test') {
        e.addEventListener('click', test)}
})

