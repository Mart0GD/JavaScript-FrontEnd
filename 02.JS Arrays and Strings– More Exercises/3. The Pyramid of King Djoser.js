
function solve(baseSize, increment){

    //let height = Math.round(baseSize / 2);

    let stone = 0;
    let marble = 0;
    let lapis = 0
    let gold = 0
    let floor = 0;

    while(baseSize > 2){

        floor++;
        let rowSize = baseSize;

        let outerLayer = (rowSize * 4) - 4;
        let innerLayer = (rowSize**2) - outerLayer;

        if (floor % 5 === 0) { //lapis row
            lapis += outerLayer;
            stone += innerLayer;
        }
        else{ // regular stone and marble
            marble += outerLayer;
            stone += innerLayer;
        }

        baseSize-= 2;
    }

    gold = (baseSize**2);
    floor++;

    console.log(`Stone required: ${Math.ceil(stone * increment)}`);
    console.log(`Marble required: ${Math.ceil(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(floor * increment)}`);
}

solve(23, 0.5);