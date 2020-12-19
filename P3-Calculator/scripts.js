'use strict';

//State the constants
const calInput = document.querySelectorAll('button');

let tempNum, displayVal, answer, firstVal,secondVal, ops;

displayVal = [];
answer = 0;
firstVal = [];
secondVal = [];
ops = [];
const operation = {
    '+' : function(a,b) {return a + b;},
    '-' : function(a,b) {return a - b;},
    '*' : function(a,b) {return a * b;},
    '÷' : function(a,b) {return a / b;},
    'negative' : function(a) {return -a;},
}

//First Input a value
let inputNum = n => {
    if (firstVal.length == 1) {
    //If there is an (a), we will need a (b) for our second var. Thus we set the answer to 0 and reset the display
    tempNum = n.target.id.toString('');
    displayVal.push(tempNum);
    answer = displayVal.join('');
    document.querySelector('.answer').textContent = answer;
    console.log(answer)
    }
    //If there is no first mathVal (a), then we will create one
    else {
    tempNum = n.target.id.toString('');
    displayVal.push(tempNum);
    answer = displayVal.join('');
    document.querySelector('.answer').textContent = (answer);
    console.log(answer)
    }
}

const symbol = o => {
    if (firstVal.length === 0 ) {
        firstVal.push(answer)
        ops.push(o.target.id.toString(''));
        reset();
        console.log(ops);
    } else {
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

const equal = () => {
    if (secondVal.length === 0) {
    secondVal.push(answer);
        if(ops.length,firstVal.length,secondVal.length === 1) {
            console.log(ops)
            var finalAnswer = operation[ops](parseInt(firstVal[0]), parseInt(secondVal[0]));
            console.log(finalAnswer)
            document.querySelector('.answer').textContent = finalAnswer;

            //Reset firstValue and ops then push this answer to the first val of mathVal to be the first answer.
            firstVal = [];
            firstVal.push(finalAnswer);
            console.log(firstVal[0]);
        }
    } else {
        console.log(firstVal[0])
        console.log(parseInt(secondVal[0]))
        if(ops.length,firstVal.length,secondVal.length === 1) {
            var finalAnswer = operation[ops](firstVal[0], parseInt(secondVal[0]));
            console.log(finalAnswer)
            document.querySelector('.answer').textContent = finalAnswer;

            //Reset firstValue and ops then push this answer to the first val of mathVal to be the first answer.
            firstVal = [];
            firstVal.push(finalAnswer);
        }
    }
}

const reset = () => {
    displayVal = [];
    answer = 0;
}

const ACreset = () => {
    displayVal = [];
    answer = 0;
    firstVal = [];
    secondVal = [];
    ops = [];
    document.querySelector('.answer').textContent = 0;
}

const displayAnswer = () => {
}

//Evaluate the button for each
calInput.forEach(function(e) {
    if(e.className === 'numbers') {e.addEventListener('click', inputNum);}
    else if (e.className === 'operations') {e.addEventListener('click', symbol);}
    else if (e.className === 'ACreset') {e.addEventListener('click', ACreset)}
    else if (e.className === 'equal') {
        e.addEventListener('click', equal)}
})

if(ops.length,firstVal.length,secondVal.length === 1) {console.log('hello')}