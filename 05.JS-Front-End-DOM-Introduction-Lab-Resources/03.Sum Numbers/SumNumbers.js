function calc() {
    const numberOne = Number(document.querySelector('#num1').value);
    const numberTwo = Number(document.getElementById('num2').value);

    document.getElementById('sum').value = numberOne + numberTwo;
}
