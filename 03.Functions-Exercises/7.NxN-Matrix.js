
function solve(number){

    const printRow = (templateNumber) => {
        let row = [];

        for(y = 0; y < templateNumber; y++){
            row.push(templateNumber)
        }

        return row.join(" ");
    };

    for(i = 0; i < number; i++){
        console.log(printRow(number));
    }
}

solve(32);