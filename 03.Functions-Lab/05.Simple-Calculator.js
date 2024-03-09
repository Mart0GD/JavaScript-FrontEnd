
function solve(num1, num2, operator){

    const operations = [
        ["multiply" ,(x, y) => x * y],
        ["divide" ,(x, y) => x / y],
        ["add" ,(x, y) => x + y],
        ["subtract" ,(x, y) => x - y]
    ]

    for (const operation of operations) {
        
        if (operation[0] == operator) {
            console.log(operation[1](num1, num2));
        }
    }

}

solve(5, 5, "multiply")