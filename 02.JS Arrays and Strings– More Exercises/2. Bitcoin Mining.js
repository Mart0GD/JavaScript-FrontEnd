
function solve(gold){

    const LevaPerGramOfGold = 67.51;
    const BitcoinPrice = 11949.16;

    let money = 0;
    let bitcoins = 0;
    let fistDay = -1;
    for(let i = 0; i < gold.length; i++){

        let shift = gold[i] * LevaPerGramOfGold;
        money += shift;

        if ((i + 1) % 3 === 0) {
            money -= shift * 0.3;
        }   
        if (money >= BitcoinPrice && fistDay === -1) {
            fistDay = i + 1;
            bitcoins++;
            money -= BitcoinPrice;
        }
    }

    while (BitcoinPrice <= money) {
        bitcoins++;
        money -= BitcoinPrice;
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${fistDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

solve([50, 100]);