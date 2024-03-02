
function sum(start, end){

    let sum = 0;
    let numbers = [];

    for(i = start; i <= end; i++){
        numbers.push(i);
        sum += i;
    }

    console.log(numbers.join(" "));
    console.log("Sum: " + sum);
}

sum(0, 26)