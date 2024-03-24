
function solve(input){
    garages = {};

    for(const row of input){
        let [garage, info] = row.split(" - ");

        if (!garages.hasOwnProperty(garage)) {
            garages[garage] = [];
        }

        let car = 
        info.split(", ")
            .map(x => x.split(": "))
            .map(x => x.join(" - "))
            .join(", ");

        garages[garage].push(car);
    }

    Object.entries(garages).forEach(([number, cars]) => {
        console.log(`Garage № ${number}`);
        for(const car of Object.values(cars)){

            console.log(`--- ${car}`);
            
        }
    })
}

solve(
['1 - color: blue, fuel type: diesel',
'1 - color: red, manufacture: Audi',
'2 - fuel type: petrol',
'4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);
console.log("------------");
solve(['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol'])