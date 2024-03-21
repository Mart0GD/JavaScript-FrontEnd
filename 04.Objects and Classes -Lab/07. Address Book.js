
function solve(input){


    addressBook = input.reduce((acc, element) => {
        let [name, address] = element.split(":");

        if(acc.hasOwnProperty(name)){
            acc[name] = address;

            return acc;
        }
        else{
            return {...acc, [name]:address}
        }
        
    }, {})

    Object.entries(addressBook).sort((a,b) => a[0].localeCompare(b[0])).forEach(([name, address]) => {
        console.log(`${name} -> ${address}`);
    })
}

solve(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])