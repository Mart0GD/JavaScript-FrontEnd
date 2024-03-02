
function calculate(num1, operator, num2) {

    const operators = ['+', '-', '/', '*'];

    let sum = 0;
    switch (operator) {
        case "+":
            sum = num1 + num2;
            break;

        case "-":
            sum = num1 - num2;
            break

        case "/":
            sum = num1 / num2;
            break;

        case "*":
            sum = num1 * num2;
            break
        default:
            break;
    }

    console.log(sum.toFixed(2));
}

calculate(5,'+', 10)