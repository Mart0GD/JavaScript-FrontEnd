
function solve(product, quantity){

    const order = (product, quantity) => {

        let productPrices = [["coffee", 1.5], ["water", 1], ["coke", 1.4] , ["snacks", 2]];

        return productPrices.find(x => x[0] === product)[1] * quantity;
    };

    console.log(order(product,quantity).toFixed(2));

}

solve("water", 5)