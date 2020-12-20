'use strict';

//Supplement function needed

//tests whether a value is a float
const isFloat = (n) => {
    return n.toString().indexOf('.') != -1;
}

//State the constants
const calInput = document.querySelectorAll('button');

let tempNum, displayVal, answer, firstVal,secondVal, ops, floatArr;

displayVal = [];
answer = 0;
firstVal = [];
secondVal = [];
ops = [];
const operation = {
    '+' : function(a,b) {return a + b;},
    '-' : function(a,b) {return a - b;},
    '*' : function(a,b) {return a * b;},
    '÷' : function(a,b) {return b === 0 ? null : a / b;},
}

//First Input a value
let inputNum = n => {
    if (firstVal.length == 1) {
        if(isFloat(answer) === false) {
            //If there is an (a), we will need a (b) for our second var. Thus we set the answer to 0 and reset the display
            tempNum = n.target.id.toString('');
            displayVal.push(tempNum);
            answer = displayVal.join('');
            document.querySelector('.answer').textContent = parseInt(answer);
        } else {
            tempNum = n.target.id.toString('');
            displayVal = [answer];
            displayVal.push(tempNum);
            answer = displayVal.join('');
            document.querySelector('.answer').textContent = answer;
            console.log(answer)
        }
    }
    //If there is no firstVal (a), then we will create one
    else {
        if(isFloat(answer) === false) {
            tempNum = n.target.id.toString('');
            displayVal.push(tempNum);
            answer = displayVal.join('');
            document.querySelector('.answer').textContent = (answer);
            console.log(answer)
        } else {
            tempNum = n.target.id.toString('');
            displayVal = [answer];
            displayVal.push(tempNum);
            answer = displayVal.join('');
            document.querySelector('.answer').textContent = (answer);
            console.log(answer)
        }
    }
}

const symbol = o => {
    if (firstVal.length === 0 ) {
        firstVal.push(answer)
        ops.push(o.target.id.toString(''));
        reset();
        console.log(ops);
    } else if (firstVal.length === 1 && ops.length === 1) {
        //If there is a second value, i.e. after pressing equal, then we want to remove the second value and change the operation
        if (secondVal.length === 1) {
            secondVal = [];
            ops.shift();
            ops.push(o.target.id);
            reset();
        } else if (secondVal.length === 0) {
            if (displayVal.length === 0) {
                ops.shift();
                ops.push(o.target.id);
            } else {
                secondVal.push(answer);
                var finalAnswer = operation[ops](parseFloat(firstVal[0]), parseFloat(secondVal[0]));
                console.log(finalAnswer)
                document.querySelector('.answer').textContent = finalAnswer;
                //Reset firstValue and ops then push this answer to the first val of mathVal to be the first answer.
                firstVal = [];
                firstVal.push(finalAnswer);
                secondVal = [];
                reset();}
        }
    }
    else {if (ops.length === 0){
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
    if (secondVal.length === 0 && ops.length === 1) {
    secondVal.push(answer);
        if(ops.length,firstVal.length,secondVal.length === 1) {
            var finalAnswer = operation[ops](parseFloat(firstVal[0]), parseFloat(secondVal[0]));
            document.querySelector('.answer').textContent = finalAnswer;

            //Reset firstValue and ops then push this answer to the first val of mathVal to be the first answer.
            firstVal = [];
            firstVal.push(finalAnswer); 
        }
    } else if (ops.length === 0) {
        firstVal.push(answer);
        document.querySelector('.answer').textContent = answer;
        console.log('hey')
    } else {
        if(ops.length,firstVal.length,secondVal.length === 1) {
            var finalAnswer = operation[ops](firstVal[0], parseFloat(secondVal[0]));
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

const addFloat = () => {
    if (isFloat(document.querySelector('.answer').textContent) === false) {
        //adds a decimal if the answer is not a float
        floatArr = [answer.toString()];
        floatArr.push('.')
        answer = floatArr.join('')
        document.querySelector('.answer').textContent = answer;
    }
}

const percent = () => {
    answer = answer/100;
    document.querySelector('.answer').textContent = answer;
}
const negative = () => {
        answer = -answer
        document.querySelector('.answer').textContent = answer;
}

//Evaluate the button for each
calInput.forEach(function(e) {
    if(e.className === 'numbers') {
        e.addEventListener('click', inputNum);
    }
    else if (e.className === 'operations') {e.addEventListener('click', symbol);}
    else if (e.className === 'addFloat') {e.addEventListener('click', addFloat);}
    else if (e.className === 'percent') {e.addEventListener('click', percent);}
    else if (e.className === 'negative') {e.addEventListener('click', negative);}
    else if (e.className === 'ACreset') {e.addEventListener('click', ACreset)}
    else if (e.className === 'equal') {
        e.addEventListener('click', equal)}
})

document.onkeyup = function(e) {
    if (e.which == 49) {
      alert("1 key was pressed");
    } else if (e.ctrlKey && e.which == 66) {
      alert("Ctrl + B shortcut combination was pressed");
    } else if (e.ctrlKey && e.altKey && e.which == 89) {
      alert("Ctrl + Alt + Y shortcut combination was pressed");
    } else if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
      alert("Ctrl + Alt + Shift + U shortcut combination was pressed");
    }
  };

