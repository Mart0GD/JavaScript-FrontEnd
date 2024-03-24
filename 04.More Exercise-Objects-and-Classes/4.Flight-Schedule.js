
function solve(input){

    const cancelledStatus = "Cancelled";
    const readyToFlyStatus = "Ready to fly";

    [flights, changes, finalStatus] = input;

    flights = flights.map(flight => {

        let [number, Destination] = flight.split(/(?<=[0-9])\s+(?=[A-Z])/);

        return {
            number,
            Destination
        }
    });

    changes.map(flight => flight.split(" ")[0])
    .forEach(flight => {

        let foundFlight = flights.find(x => Object.values(x).includes(flight))

        if (foundFlight) {
            foundFlight['Status'] = cancelledStatus;
        }
    });
        
    switch (finalStatus.join("")) {
        case cancelledStatus:
            flights.filter(x => Object.values(x).length === 3).forEach(x => {
                delete x.number;
                console.log(x)
            });   
        break;

        case readyToFlyStatus:
            flights.forEach(x => {
                if (Object.values(x).length === 2) {
                    x['Status'] = readyToFlyStatus
                    delete x.number;
                    console.log(x)
                }
            })
        break;
    }
}

solve([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
])

console.log("--------------------------");

// solve([['WN269 Delaware',
// 'FL2269 Oregon',
//  'WN498 Las Vegas',
//  'WN3145 Ohio',
//  'WN612 Alabama',
//  'WN4010 New York',
//  'WN1173 California',
//  'DL2120 Texas',
//  'KL5744 Illinois',
//  'WN678 Pennsylvania'],
//  ['DL2120 Cancelled',
//  'WN612 Cancelled',
//  'WN1173 Cancelled',
//  'SK330 Cancelled'],
//  ['Ready to fly']
// ])