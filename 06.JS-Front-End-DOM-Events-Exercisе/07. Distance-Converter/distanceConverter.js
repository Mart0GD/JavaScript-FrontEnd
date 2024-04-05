function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', (e) => {
        const fromUnit = document.getElementById('inputUnits').value;
        const fromDistance = Number(document.getElementById('inputDistance').value);

        let meters = convertToMeters(fromUnit, fromDistance)

        const toUnit =  document.getElementById('outputUnits').value;
        document.getElementById('outputDistance').value = convertFromMeters(toUnit, meters);
    });

    
function convertFromMeters(unit, meters){

    switch (unit) {
        case 'km':
            return meters / 1000;
        case 'm':
            return meters;
        case 'cm':
            return meters * 100;
        case 'mm':
            return meters * 1000;
        case 'mi':
            return meters / 1609.34;
        case 'yrd':
            return meters / 0.9144;
        case 'ft':
            return meters / 0.3048;
        case 'in':
            return meters / 0.0254;
    }      
}

function convertToMeters(unit, distance){
    
    switch (unit) {
        case 'km':
            return distance * 1000;
        case 'm':
            return distance;
        case 'cm':
            return distance / 100;
        case 'mm':
            return distance / 1000;
        case 'mi':
            return distance * 1609.34;
        case 'yrd':
            return distance * 0.9144;
        case 'ft':
            return distance * 0.3048;
        case 'in':
            return distance * 0.0254;
    }      
}
}
