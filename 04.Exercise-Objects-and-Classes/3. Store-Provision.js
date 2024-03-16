function solve(stock, restock){

    let storage = {};

    for(let i = 0; i < stock.length; i++){

        let item = stock[i];

        if (!storage.hasOwnProperty(item)){
            storage[item] = 0;
        }

        storage[item] += Number(stock[++i])
    }

    for(let i = 0; i < restock.length; i++){

        let item = restock[i];

        if (!storage.hasOwnProperty(item)){
            storage[item] = 0;
        }

        storage[item] += Number(restock[++i])
    }

    for(let item in storage){
        console.log(`${item} -> ${storage[item]}`);
    }
}

function fancySolve(stock, restock){

    let allstock = stock.concat(restock);

    let storage = {};
    for(i = 0; i < allstock.length; i++){
    
        let item = allstock[i];
        !storage.hasOwnProperty(item) ? storage[item] = 0 : null;

        storage[item] += Number(allstock[++i]);
    }

    Object.keys(storage).forEach(item => console.log(`${item} -> ${storage[item]}`));
}

fancySolve([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ]);