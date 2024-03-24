
function solve(input){

    let catalog = input.map(entry => {
        [product, price] = entry.split(" : ")

        return {
            product,
            price
        }
    })
    .sort((a, b) => a.product.localeCompare(b.product));

    let previousWord = '';
    for(const catalogEntry of catalog){

        let product = catalogEntry.product[0];
        if (previousWord != product || previousWord === '') {
            console.log(product);
        }
        
        console.log(`  ${catalogEntry.product}: ${catalogEntry.price}`);
        previousWord = product[0];
    }
}

solve([

    'Appricot : 20.4',
    
    'Fridge : 1500',
    
    'TV : 1499',
    
    'Deodorant : 10',
    
    'Boiler : 300',
    
    'Apple : 1.25',
    
    'Anti-Bug Spray :15',
    
    'T-Shirt : 10'
    
    ]);