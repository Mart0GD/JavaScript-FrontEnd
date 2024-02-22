
function sumDigits(number){

    let sum = 0;
    let str = number; 
    
    for(let i = 0; i < str.length; i++){
        sum += Number.parseInt(str[i]);
    }

    console.log(sum)
}

sumDigits("245678");