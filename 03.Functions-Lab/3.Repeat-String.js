
function solve(string, repeatTimes){

    console.log(repeatString(string, repeatTimes));
    
}


function repeatString(string, repetitionTimes){
        
    let finalString = "";
    for(i = 0; i < repetitionTimes; i++){
        finalString += string;
    }

    return finalString;
}

solve("abc", 3)