
function solve(input){

    Object.entries(JSON.parse(input)).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    })
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')