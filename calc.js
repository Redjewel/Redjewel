function add(num1, num2) {
    return (num1 + num2);
}

function subtract(num1, num2) {
    if (num1 < num2) {
        temp = num1;
        num1 = num2;
        num2 = temp;
        return (`-${num1 - num2}`);
    }
    return (num1 - num2);
}

function divide(num1, num2) {
    return (num1 / num2);
}

function multiply(num1, num2) {
    return (num1 * num2);
}

function modulo(num1, num2) {
    return (num1 % num2);
}

function calculate(num1, num2, fn) {
    return (fn(num1, num2));
}

//examples
function exorcism() {
    let one;
    let two;
    let operator;
    let clap = true;
    while (clap) {
        one = parseInt(prompt("Enter first number: "));
        if (Number.isInteger(one)) {
            break;
        } else {
            continue;
        }
    }

    let house = true;
    while (house) {
        operator = prompt("Enter an operator of your choice(+, -, *, /, %): ");
        if ((operator === '+') || (operator === '-') || (operator === '*') || (operator === '/') || (operator === '%')) {
            break;
        }else{
            continue;
        }
    }
    

    let nap = true;
    while (nap) {
        two = parseInt(prompt("Enter second number: "));
        if (Number.isInteger(two)) {
            break;
        } else {
            continue;
        }
    }

    switch (operator) {
        case "+":
            ans = add(one, two);
            break;

        case "-":
            ans = subtract(one, two);
            break;

        case "*":
            ans = multiply(one, two);
            break;

        case "/":
            ans = divide(one, two);
            break;

        case "%":
            ans = modulo(one, two);
            break;
        default:
            break;
    }

    alert(ans);

}
exorcism();
