
function solve(yield){

    const minersShiftToll = 26;

    let spiceMined = 0;
    let operationDays = 0;

    while(yield >= 100){

        spiceMined += yield;
        yield -= 10;

        if(spiceMined - minersShiftToll > 0){
            spiceMined -= minersShiftToll;
        }

        operationDays++;
    }

    if(spiceMined - minersShiftToll > 0){
        spiceMined -= minersShiftToll;
    }

    console.log(operationDays);
    console.log(spiceMined)
}

solve(450)