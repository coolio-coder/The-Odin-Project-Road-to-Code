'use strict';

//isFloat tests whether a value is a float
const isFloat = (n) => {
    return n.toString().indexOf('.') != -1;
}

//Constants/Variables needed
let tempNum, displayVal, answer, firstVal,secondVal, ops, floatArr;

const calInput = document.querySelectorAll('button');

displayVal = [];
answer = 0;
firstVal = [];
secondVal = [];
ops = [];

//Used to determine whether the inputted value is a key binded input (where n would be a string) or a click (where n is still a class name)
const numBindTest = n => {
    console.log(n)
    if (typeof n === "string") {
        tempNum = n;
    } else {
        tempNum = n.target.id.toString('');
    }
}
//Used to determined whether the operator that was inputted was via key binding or click
const opsBindTest = o => {
    if (typeof o === "string") {
        ops.push(o)
    } else {
        ops.push(o.target.id)
    }
}
//Soft reset to reset the display value and answer for the next input value the user makes
const reset = () => {
    displayVal = [];
    answer = 0;
}

/*

ALL THE MAJOR CLASS NAMES/FUNCTION ON THE KEY

*/

//Object containing the operators and their respective functions as key:object pairs so that it'll be easier to call them later 
const operation = {
    '+' : function(a,b) {return a + b;},
    '-' : function(a,b) {return a - b;},
    '*' : function(a,b) {return a * b;},
    '/' : function(a,b) {return b === 0 ? 'undefined' : a / b;},
    'exp' : function(a,b) {return a ** b;}
}
//Hard reset to remove answer, operator, first/second value, etc
const ACreset = () => {
    displayVal = [];
    answer = 0;
    firstVal = [];
    secondVal = [];
    ops = [];
    document.querySelector('.answer').textContent = 0;
}
//Using the isFloat function we've created, this function allows the user to add a decimal to the calculator. The if statement tests whether the value already has a decimal.
const addFloat = () => {
    if (isFloat(document.querySelector('.answer').textContent) === false) {
        //adds a decimal if the answer is not a float
        floatArr = [answer.toString()];
        floatArr.push('.')
        answer = floatArr.join('')
        document.querySelector('.answer').textContent = answer;
    }
}
//Percent divides the current value by 100
const percent = () => {
    answer = answer/100;
    document.querySelector('.answer').textContent = answer;
}
//Changes the sign of the curren value 
const negative = () => {
    answer = -answer
    document.querySelector('.answer').textContent = answer;
}
//backspace deletes the last element of the current answer with slice(0,-1) then joins it back with .join(''). Added a if statement to place a zero in case backspace deletes everything on the screen
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
    } else {}
}

//Inputs a number based on key binding or click
let inputNum = n => {
    //For the second value
    if (firstVal.length == 1) {
        numBindTest(n)
        //If the answer is not a float, then we just push the tempNum (or the inputted value) onto the displayVal (which is an array). The displayVal is converted into a string for the answer, which will be displayed on the screen
        if(isFloat(answer) === false) {} else {displayVal = [answer];}
        displayVal.push(tempNum);
        answer = displayVal.join('');
        document.querySelector('.answer').textContent = answer;
    }
    //If there is no firstVal (a), then we will create one
    else {
        numBindTest(n)
        if(isFloat(answer) === false) {} else {displayVal = [answer];}
        displayVal.push(tempNum);
        answer = displayVal.join('');
        document.querySelector('.answer').textContent = answer;
    }
}

//Returns an operator
const symbol = o => {
    console.log(o)
    //If there is no first value when an operator is press, push the operator value here
    if (firstVal.length === 0 ) {
        firstVal.push(answer)
        opsBindTest(o)
        reset();
        console.log(ops);
    //If there is already a first value and an operator, we go through this if to input a second value
    } else if (firstVal.length === 1 && ops.length === 1) {
        //If there is a second value, i.e. after pressing equal, then we want to remove the second value and change the operation
        if (secondVal.length === 1) {
            secondVal = [];
            ops.shift();
            opsBindTest(o)
            reset();
        } else if (secondVal.length === 0) {
            //If the display value is zero (i.e. if you already have a first value but press operator twice), then we want to just switch the operator if the user press operator sybol consecutively
            if (displayVal.length === 0) {
                ops.shift();
                opsBindTest(o)
            //Input the second value
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
    //This is just in case the user press two operators consecutively and need to update the current operator
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

//Returns the total
const equal = () => {
    //If there is no second value, equal will push the current answer as the second value
    if (secondVal.length === 0 && ops.length === 1) {
    secondVal.push(answer);
        if(ops.length,firstVal.length,secondVal.length === 1) {
            var finalAnswer = operation[ops](parseFloat(firstVal[0]), parseFloat(secondVal[0]));
            document.querySelector('.answer').textContent = finalAnswer;
            //Reset firstValue and ops then push this answer to the first val of mathVal to be the first answer.
            firstVal = [];
            firstVal.push(finalAnswer); 
        }
    //If the user press equal with only one value, the code will just return the current value
    } else if (ops.length === 0) {
        firstVal.push(answer);
        document.querySelector('.answer').textContent = answer;
    //If the user has more than one value to compute
    } else {
        if(ops.length,firstVal.length,secondVal.length === 1) {
            var finalAnswer = operation[ops](firstVal[0], parseFloat(secondVal[0]));
            document.querySelector('.answer').textContent = finalAnswer;
            firstVal = [];
            firstVal.push(finalAnswer);
        }
    }
}


//Keybinding for each key value that is pressed
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

//Evaluate the button for each click
calInput.forEach(function(e) {
    if(e.className === 'numbers') {e.addEventListener('click',inputNum);}
    else if (e.className === 'operations') {e.addEventListener('click', symbol);}
    else if (e.className === 'addFloat') {e.addEventListener('click', addFloat);}
    else if (e.className === 'percent') {e.addEventListener('click', percent);}
    else if (e.className === 'negative') {e.addEventListener('click', negative);}
    else if (e.className === 'ACreset') {e.addEventListener('click', ACreset)}
    else if (e.className === 'equal') {e.addEventListener('click', equal)}
})
