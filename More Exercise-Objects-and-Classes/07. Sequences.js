
function solve(input){

    let arrays = sortArrays(input.map(x => JSON.parse(x)))

    removeDuplicates(arrays);

    arrays.sort((a, b) => a.length - b.length).forEach(x => console.log(`[${x.join(", ")}]`));

    
}

function comapreArrays(arr1, arr2){
    if(arr1.length != arr2.length) return false;

    let areSame = true;
    for(let i = 0; i < arr1.length; i++){

        if (arr1[i] != arr2[i]) {
            areSame = false;
            break;
        }
    }

    return areSame
}

function sortArrays(arrays){

    for(i = 0; i < arrays.length; i++){
        arrays[i] = arrays[i].sort((a, b) => b - a); 
    }

    return arrays;
}

function removeDuplicates(arrays){

    for(i = 0; i < arrays.length; i++){
        
        let arr1 = arrays[i];
        for(y = i + 1; y < arrays.length; y++){
            let arr2 = arrays[y];

            comapreArrays(arr1, arr2) ? arrays.splice(y, 1) : null;
        }
        
    }
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",

"[10, 1, -17, 0, 2, 13]",

"[4, -3, 3, -2, 2, -1, 1, 0]"])