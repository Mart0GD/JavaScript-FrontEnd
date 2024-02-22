
function fruitCalculator(fruit, grams, pricePerKilo){

    let kilos = (grams / 1000);

    console.log(`I need $${(pricePerKilo * kilos).toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit}.`)
}

fruitCalculator('apple', 1563, 2.35);