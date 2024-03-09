
function solve(numbers){

    let stringNumbers = convertToString(numbers)
    
    for(i = 0; i < stringNumbers.length; i++){
        console.log(checkPalindrome(stringNumbers[i]));
    }

    
}

solve([123,323,421,121]);

function convertToString(arr){
    let numbersAsStirng = arr.map(x => {
        return x.toString();
    });

    return numbersAsStirng;
}

function checkPalindrome(number){
    let numberReverse = number.slice(0, number.length).split("").reverse().join("");

    return number == numberReverse;
}