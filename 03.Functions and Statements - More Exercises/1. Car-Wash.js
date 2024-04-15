
function solve(input){

    const cleaningOperations = [
        ["soap", (cleanliness) => cleanliness += 10],
        ["water", (cleanliness) => cleanliness += 0.2 * cleanliness],
        ["vacuum cleaner", (cleanliness) => cleanliness += 0.25 * cleanliness],
        ["mud", (cleanliness) => cleanliness -= 0.1 * cleanliness],
    ]

    let cleanValue = 0;
    for(const operaion of input){
        let washOperation = cleaningOperations.find(x => x[0] === operaion);

        cleanValue = washOperation[1](cleanValue);
    }

    console.log(`The car is ${cleanValue.toFixed(2)}% clean.`);
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap','water'])
solve(["soap", "water", "mud", "mud", "water", "mud","vacuum cleaner"])