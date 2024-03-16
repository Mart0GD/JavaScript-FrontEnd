
function solve(input){

    let parking = {};

    input.forEach(command => {

        let [action, plate] = command.split(", ");

        if (action === "IN") {
            parking[plate] = action; 
        }
        else{
            delete parking[plate];
        }
       
    })

    Object.keys(parking).sort((a, b) => a.localeCompare(b)).forEach(x => console.log(x));

}

solve(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])