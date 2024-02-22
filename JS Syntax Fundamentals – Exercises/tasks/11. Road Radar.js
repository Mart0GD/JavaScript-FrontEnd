
function speedRadar(speed, road) {
    let speedLimits =
    {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20,
    }

    let limit = speedLimits[road];

    if (speed <= limit) {
        return console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
    
    let speeding = speed - limit;
    let status = "";
    if (speeding <= 20) {
        status = "speeding";
    }
    else if (speeding <= 40) {
        status = "excessive speeding";
    }
    else {
        status = "reckless driving";
    }

    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`);

}

speedRadar(200, 'motorway');


