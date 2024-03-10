
const operations = [
    ["Cut", cut = (material) => material / 4],
    ["Lap", lap = (material) => material -= material * 0.2],
    ["Grind", grind = (material) => material -= 20],
    ["Etch", etch = (material) => material -= 2],
    ["X-ray", xRay = (material) => material += 1],
    ["Transporting and washing", transportAndWash = (material) => Math.floor(material)],
]


solve([1000, 4000, 8100]);

function solve(info){

    const desiredThickness = info[0];
    let cristals = info.slice(1, info.length);
    for(i = 0; i < cristals.length; i++){
        
        let cristal = cristals[i]

        console.log(`Processing chunk ${cristal} microns`);

        let consequentOperations = 1
        let previousOperation = null;
        let currentOperation = chooseOperation(cristal, desiredThickness);
        while (true) {

            if (cristal <= desiredThickness) {
                break;
            }
            cristal = currentOperation[1](cristal);


            previousOperation = currentOperation;
            currentOperation = chooseOperation(cristal, desiredThickness);

            if (currentOperation != previousOperation) {
                console.log(`${previousOperation[0]} x${consequentOperations}`);

                cristal = operations[operations.length - 1][1](cristal);
                console.log("Transporting and washing");
                consequentOperations = 1;

                continue;
            }

            consequentOperations++;
        }

        if (cristal < desiredThickness) {
            let operaion = operations[operations.length - 2];
            cristal = operaion[1](cristal);

            console.log(`${operaion[0]} x1`);
        }

        console.log(`Finished crystal ${desiredThickness} microns`);
    }

    
    
}

function chooseOperation(thickness, desiredThickness){

    let bestOperation;
    let leastLeftMaterial = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < operations.length - 2; i++){

        let operation = operations[i];
        let leftMaterial = operation[1](thickness);

        if (leftMaterial < leastLeftMaterial && leftMaterial >= desiredThickness || leftMaterial + 1 == desiredThickness) {
            leastLeftMaterial = leftMaterial;
            bestOperation = operation;
        }
    }

    return bestOperation;
}
