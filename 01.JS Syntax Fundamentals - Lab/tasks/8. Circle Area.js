
function area(input){
    if(typeof input != typeof 1) {console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`); return;}

    console.log(((input**2) * Math.PI).toFixed(2));
}

area(5);