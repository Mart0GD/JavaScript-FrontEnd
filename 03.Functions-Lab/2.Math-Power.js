
function solve(number, power){

    console.log(myMathPower(number, power))

    
}


function myMathPower(number, power){
    
    let finalResult = 1;
    for(i = 0; i < power; i++){
        finalResult *= number;
    }

    return finalResult;
}

solve(2, 8)