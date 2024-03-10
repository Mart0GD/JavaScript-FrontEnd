
function solve(points){

    const isDistanceValid = (distance) => Number.isInteger(distance);
    const distanceBetween = (x1,y1,x2,y2) => {
        let distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

        return `{${x1}, ${y1}} to {${x2}, ${y2}} is ${ isDistanceValid(distance) ? "valid" : "invalid"}`;
    }

    console.log(distanceBetween(points[0], points[1], 0, 0));
    console.log(distanceBetween(points[2], points[3], 0, 0));
    console.log(distanceBetween(points[0], points[1], points[2], points[3]));
}

solve([2, 1, 1, 1]);
