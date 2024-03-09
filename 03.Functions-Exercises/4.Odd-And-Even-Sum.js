
function solve(number){

    sumEvensAndOdds(number);
}

isEven = (number) => number % 2 == 0;

function sumEvensAndOdds(number){
   
    let evenSum = 0;
    let oddSum = 0;

    let numberAsArray = number.toString().split("");
    for(i = 0; i < numberAsArray.length; i++){

        let number = Number.parseInt(numberAsArray[i]);
        if (isEven(number)) {
            evenSum += number;
            continue;
        }

        oddSum+= number;
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);