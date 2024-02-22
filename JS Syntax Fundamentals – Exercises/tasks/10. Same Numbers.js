
function sameNumbers(number){

    let arr = Array.from(number.toString());
    let firstNumber = number.toString()[0];

    let sum = 0;
    let areNumbersSame =  arr.every((x) => x == firstNumber);
   
    arr.forEach(x => sum += Number.parseInt(x));

    console.log(areNumbersSame);
    console.log(sum);
    
}

sameNumbers(222222);