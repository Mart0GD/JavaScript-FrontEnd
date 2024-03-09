
function solve(num1, num2, num3){

    let minNumber = (...numbers) => {

        let smallestNumber = Number.MAX_SAFE_INTEGER;

        for(i = 0; i < numbers.length; i++){
            
            let number = numbers[i];
            if (number < smallestNumber) {
                smallestNumber = number;
            }
        }

        return smallestNumber;
    }

    console.log(minNumber(num1,num2,num3));

}

solve(2, 5, 3)