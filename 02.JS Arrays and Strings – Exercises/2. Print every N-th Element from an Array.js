
function solve(array, step){

    let chosenElements = [];
    for(let i = 0; i < array.length; i+= step){
        chosenElements.push(array[i]);
    }

    return chosenElements;
}

console.log(solve(['5',

'20',

'31',

'4',

'20'],

2))