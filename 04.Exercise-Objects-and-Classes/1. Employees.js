
function solve(employees){

    let employeeBook = {};

    for(i = 0; i < employees.length; i++){
        
        employeeBook[employees[i]] = employees[i].length;
    }

    for(let employee in employeeBook){
        console.log(`Name: ${employee} -- Personal Number: ${employeeBook[employee]}`);
    }

}

solve('Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal')