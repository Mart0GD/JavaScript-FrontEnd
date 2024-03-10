
function solve(number){

    number = number.toString();
    let average = checkAverage(number);

    while (average <= 5) {
        number += '9';
        average = checkAverage(number);
    }

    console.log(number);

    
}

function checkAverage(number){
        
    let numberSum = 0;
    let numbersAsArray = number.split("").map(Number);

    for(i = 0; i < numbersAsArray.length; i++){
        numberSum += numbersAsArray[i]
    }

    return numberSum / numbersAsArray.length;
}


solve(5835);