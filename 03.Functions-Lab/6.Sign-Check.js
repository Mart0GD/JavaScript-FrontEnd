
function solve(num1, num2, num3){

    const checkNegative = (number) => number < 0 ? true : false;

    let negatives = 0;
    const numbers = [num1, num2, num3];

    for(i = 0; i < numbers.length; i++){
        
        negatives += checkNegative(numbers[i]) ? 1 : 0;
    }

    console.log(negatives % 2 != 0 ? "Negative" : "Positive");
}

solve(5, -12, -5)