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
const numBindTest = n => {
    if (typeof n === "string") {
        tempNum = n;
    } else {
        tempNum = n.target.id.toString('');
    }
}
const opsBindTest = o => {
    if (typeof o === "string") {
        ops.push(o)
    } else {
        ops.push(o.target.id)
    }
}

const operation = {
    '+' : function(a,b) {return a + b;},
    '-' : function(a,b) {return a - b;},
    '*' : function(a,b) {return a * b;},
    '/' : function(a,b) {return b === 0 ? 'undefined' : a / b;},
    'exp' : function(a,b) {return a ** b;}
}

//First Input a value
let inputNum = n => {
    if (firstVal.length == 1) {
        if(isFloat(answer) === false) {
            //If there is an (a), we will need a (b) for our second var. Thus we set the answer to 0 and reset the display
            numBindTest(n)
            displayVal.push(tempNum);
            answer = displayVal.join('');
            document.querySelector('.answer').textContent = parseInt(answer);
        } else {
            numBindTest(n)
            displayVal = [answer];
            displayVal.push(tempNum);
            answer = displayVal.join('');
            document.querySelector('.answer').textContent = answer;
        }
    }
    //If there is no firstVal (a), then we will create one
    else {
        if(isFloat(answer) === false) {
            numBindTest(n)
            displayVal.push(tempNum);
            answer = displayVal.join('');
            document.querySelector('.answer').textContent = answer;
        } else {
            numBindTest(n)
            displayVal = [answer];
            displayVal.push(tempNum);
            answer = displayVal.join('');
            document.querySelector('.answer').textContent = answer;
        }
    }
}

const symbol = o => {
    console.log(o)
    if (firstVal.length === 0 ) {
        firstVal.push(answer)
        opsBindTest(o)
        reset();
        console.log(ops);
    } else if (firstVal.length === 1 && ops.length === 1) {
        //If there is a second value, i.e. after pressing equal, then we want to remove the second value and change the operation
        if (secondVal.length === 1) {
            secondVal = [];
            ops.shift();
            opsBindTest(o)
            reset();
        } else if (secondVal.length === 0) {
            if (displayVal.length === 0) {
                ops.shift();
                opsBindTest(o)
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
        opsBindTest(o)
        console.log(ops);
        } else {
            ops.shift();
            opsBindTest(o)
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
const backspace = () => {
    if (answer != 0) {
        var tempDel = answer.split('').slice(0,-1);
        answer = tempDel.join('');
        displayVal = tempDel;
        if (displayVal.length == 0) {
            console.log(displayVal.length)
            document.querySelector('.answer').textContent = '0';
            console.log(document.querySelector('.answer').textContent)
        } else {  
        document.querySelector('.answer').textContent = answer;
        }
    } else {
}}

document.addEventListener('keydown', function (e) {
    if(e.keyCode == 67) {ACreset();}
    else if(e.key >= 1 || e.key <= 9) {inputNum(e.key)}
    else if(e.key == 'Backspace') {backspace()}
    else if(e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/') {symbol(e.key)}
    else if(e.keyCode == '54') {symbol('exp')}
    else if(e.key == '.') {addFloat(e.key)}
    else if(e.key == '%') {percent(e.key)}
    else if(e.key == '=' || e.key == 'Enter') {equal(e.key)}
})


//Evaluate the button for each
calInput.forEach(function(e) {
    if(e.className === 'numbers') {e.addEventListener('click',inputNum);}
    else if (e.className === 'operations') {e.addEventListener('click', symbol);}
    else if (e.className === 'addFloat') {e.addEventListener('click', addFloat);}
    else if (e.className === 'percent') {e.addEventListener('click', percent);}
    else if (e.className === 'negative') {e.addEventListener('click', negative);}
    else if (e.className === 'ACreset') {e.addEventListener('click', ACreset)}
    else if (e.className === 'equal') {e.addEventListener('click', equal)}
})

// var x = '2345';
// var y = x.split('').slice(0,-1).join('')

// console.log(x);
// console.log(y);