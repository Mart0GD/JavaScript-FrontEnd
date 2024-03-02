
function solve(array, rotations){

    for(let i = 0; i < rotations; i++){

        let firstElement = array[0];
        for(let y = 1; y < array.length; y++){
            array[y - 1] = array[y];
        }

        array[array.length - 1] = firstElement;
    }

    console.log(array.join(" "));
}

solve([51, 47, 32, 61, 21], 2);