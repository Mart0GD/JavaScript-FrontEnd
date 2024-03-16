
function solve(input){

    let heroes = [];
    for(const heroInfo of input){
        let [name, level, items] = heroInfo.split(" / ");

        heroes.push({
            name,
            level,
            items
        });
    }

    heroes.sort((a, b) => a.level - b.level).forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
}

function fancySolve(input){
    input.map(hero => hero.split(" / "))
    .map(([name, level, items]) => ({
        name,
        level : Number(level),
        items
    }))
    .sort((a, b) => a.level - b.level)
    .forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    })
}

fancySolve([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
]);