
function solve(x1, y1, x2, y2){

    console.log(distanceBetween(x1, y1, 0, 0));
    console.log(distanceBetween(x2, y2, 0, 0));
    console.log(distanceBetween(x1, y1, x2, y2));

    function distanceBetween(x1, y1, x2, y2){
    
        let distance = Math.sqrt((x2 -x1)**2 + (y2 - y1)**2)
    
        return `{${x1}, ${y1}} to {${x2}, ${y2}} is ${Number.isInteger(distance) ? "valid" : "invalid"}`
    }

}



solve(2, 1, 1, 1);