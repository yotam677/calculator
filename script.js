
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let firstNumber;
let secondNumber;
let operator;

function operate(op, a, b) {
    if (op == '+') {
        return add(a,b);
    } else if (op == '-') {
        return subtract(a,b);
    } else if (op == '*') {
        return multiply(a,b);
    } else {
        return divide(a,b);
    }
}

const buttons = document.querySelectorAll('button');
const input = document.querySelector('.input');
buttons.forEach(button => button.addEventListener('click', clicked));
input.innerHTML = '';


function clicked(e) {
    let value = this.textContent; 
    let val = '';  
    if (input.innerHTML == 'ERROR') {
        input.innerHTML = '';
    }
    if (value == 'clear') {
        input.innerHTML = '';
        return;
    }
    if (input.innerHTML == '') {
        val = ignoreOperands(value);
        input.innerHTML += val;
        return;
    }
    if (isOperand(input.innerHTML[input.innerHTML.length-1])) {
        val = ignoreOperands(value);
        input.innerHTML += val;
        return;
    } 
    if (value == '=') {
       input.innerHTML = calculate(input.innerHTML);
       return;
    }
    else {
        input.innerHTML += value; 
    }

}


function ignoreOperands(val) {
    if (!isNaN(val)) {
        return val;
    } else {
        return '';
    }
}

function isOperand(val) {
    return isNaN(val);
}

function calculate(equa) {
    let i = 0;
    let a='';
    console.log(typeof equa[i])
    while(isNumber(equa[i])) {
        a += equa[i];
        ++i;
        console.log(a);
    }
    console.log(i);
    while (i < equa.length && a != 'ERROR') {        
        let b='';
        let op = equa[i];
        ++i;
        while(isNumber(equa[i]) && i < equa.length) {
            b += equa[i];
            ++i;
            console.log(b);
        }
        a = arith(a, b, op);   
    }
    return a;
}

function arith(a, b, op) {

    if (op == '+') {
        return (+a + +b);
    }
    else if (op == '-') {
        return (+a - +b);
    }
    else if (op == ':') {
        if (b == '0') {
            return 'ERROR';
        }
        return (+a / +b);
    } else {
        return (+a * +b);
    }
}

function isNumber(a) {
    if (a == '+' || a == '-' || a == 'x' || a == ':') {
        return false; 
    } else  {
        return true;
    }
}

console.log(isNumber(':'));




