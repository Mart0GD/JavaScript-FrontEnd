
function solve(number){

    let dividers = getNumberDividers(number);

    let dividersSum = dividers.reduce((pv,cv) => pv + cv , 0)

    if (dividersSum === number) {
        console.log("We have a perfect number!");
        return;
    }

    console.log("It's not so perfect.");

    

    function getNumberDividers(number){
    
        let dividers = [];
    
        for(i = number - 1; i >= 1; i--){
            if (number % i === 0) {
                dividers.push(i);
            }
        }
    
        return dividers;
    }
}

solve(1212224)