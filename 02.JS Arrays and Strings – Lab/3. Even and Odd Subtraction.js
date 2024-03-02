function solve(array){

    let evenSum = 0;
    let oddSum = 0;

    for(i = 0; i < array.length; i++){

        let number = array[i];

        if(number % 2 === 0){
            evenSum += number;
            continue;
        }

        oddSum += number;
    }

    console.log(evenSum - oddSum);
}