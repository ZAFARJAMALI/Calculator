let displayValue = '';
let operator = '';
let firstValue = '';
let secondValue = '';

function appendNumber(number) {
    displayValue += number;
    document.getElementById('display').value = displayValue;
}

function setOperator(op) {
    if (displayValue === '') return;
    firstValue = displayValue;
    operator = op;
    displayValue += ' ' + operator + ' ';
    document.getElementById('display').value = displayValue;
}

function calculate() {
    let parts = displayValue.split(' ');
    if (parts.length < 3) return;

    firstValue = parts[0];
    operator = parts[1];
    secondValue = parts[2];

    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstValue) + parseFloat(secondValue);
            break;
        case '-':
            result = parseFloat(firstValue) - parseFloat(secondValue);
            break;
        case '*':
            result = parseFloat(firstValue) * parseFloat(secondValue);
            break;
        case '/':
            result = parseFloat(firstValue) / parseFloat(secondValue);
            break;
        case '%':
            result = parseFloat(firstValue) % parseFloat(secondValue);
            break;
        default:
            return;
    }
    displayValue = result.toString();
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    firstValue = '';
    secondValue = '';
    operator = '';
    document.getElementById('display').value = '';
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}
