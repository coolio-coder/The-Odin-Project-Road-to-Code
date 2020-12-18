'use strict';

//State the constants
const calInput = document.querySelectorAll('button');

let displayVal = [];
let answer = 0;
let mathVal = [];
let ops = [];


//First Input a value
let inputNum = n => {
    let tempNum = n.target.id.toString('');
    displayVal.push(tempNum)
    answer = displayVal.join('')
    document.querySelector('.answer').textContent = answer;
    console.log(answer)
}

const operations = o => {
    
    if (mathVal.length === 0 ) {
        mathVal.push(answer)
        if (ops.length === 0){
        ops.push(o.target.id.toString(''));
        console.log(ops);
        } else {
            ops.shift();
            ops.push.o.target.id;
            console.log(ops)
        }
    } else {
        console.log(mathVal.leng)
        if (ops.length === 0){
            ops.push(o.target.id.toString(''));
            console.log(ops);
            } else {
                ops.shift();
                ops.push(o.target.id);
                console.log(ops)
            }
    }
}

const reset = () => {
    displayVal = [];
    console.log('reset');
}

const displayAnswer = () => {
     
}

//Evaluate the button for each 
calInput.forEach(function(e) {
    if(e.className === 'numbers') {e.addEventListener('click', inputNum);}
    else if (e.className === 'operations') {e.addEventListener('click', operations);}
    else if (e.className === 'reset') {e.addEventListener('click', reset)}
    else if (e.className === 'test') {
        e.addEventListener('click', test)}
})

