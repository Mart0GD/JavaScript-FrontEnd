
function solve(numbers){

    numbers = numbers.sort((a, b) => {
        if(a > b){
            return 1;
        }
        else if(b> a){
            return -1;
        }
        
        return 0;
    })

    let length = numbers.length;
    sortedArray = []
    for(let i = 0; i < length; i++){
        
        if (i % 2 == 0) {
            sortedArray.push(numbers.shift());
        }
        else{
            sortedArray.push(numbers.pop());
        }
    }

    return sortedArray;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);