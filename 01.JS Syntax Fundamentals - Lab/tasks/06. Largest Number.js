
function maxNumber(a, b, c){

    let largestNumber = Number.MIN_SAFE_INTEGER;

    let numbers = [a, b, c];
    for(let i = 0; i < numbers.length; i++){

        let currentNum = numbers[i];
        if(currentNum >= largestNumber){
            largestNumber = currentNum;
        }
    }

    console.log(`The largest number is ${largestNumber}.`)
}

maxNumber(3, 2, 1 )