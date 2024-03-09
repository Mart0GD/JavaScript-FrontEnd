
function solve(num1, num2){

    console.log((calculateFactorial(num1) / calculateFactorial(num2)).toFixed(2));

    function calculateFactorial(number){
        if (number === 1) {
            return 1;
        }

        let factorial = number * calculateFactorial(number - 1);

        return factorial; 
    }
}


solve(5, 2)