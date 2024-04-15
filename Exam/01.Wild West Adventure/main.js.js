
function solve(input){

    let possee = input.shift();

    let characters = [];
    for(i = 0; i < possee; i++){
        let [name, hp, bullets] = input.shift().split(' ');
        
        let character = {
            name,
            hp: Number(hp),
            bullets: Number(bullets)
        }

        characters.push(character);
    }

    let command = input.shift();
    while (command != "Ride Off Into Sunset") {
        
        let [action, name, tokenOne, tokenTwo] = command.split(' - ');

        
        let currentCharacter = characters.find(x => x.name === name); 
        switch (action) {

            case 'FireShot':
                if (currentCharacter.bullets > 0) {
                    currentCharacter.bullets--;
                    console.log(`${name} has successfully hit ${tokenOne} and now has ${currentCharacter.bullets} bullets!`);

                    break;
                }

                console.log(`${name} doesn't have enough bullets to shoot at ${tokenOne}!`);
            break;
        
            case 'TakeHit':
                currentCharacter.hp -= Number(tokenOne);

                if (currentCharacter.hp > 0) {
                    console.log(`${name} took a hit for ${tokenOne} HP from ${tokenTwo} and now has ${currentCharacter.hp} HP!`);
                    break;
                }

                console.log(`${name} was gunned down by ${tokenTwo}!`);
            break;

            case 'Reload':
                if (currentCharacter.bullets < 6) {
                    let bulletsToReload = 6 - currentCharacter.bullets;
                    currentCharacter.bullets = 6;
                    console.log(`${name} reloaded ${bulletsToReload} bullets!`);

                    break;
                }

                console.log(`${name}'s pistol is fully loaded!`);
            break;

            case 'PatchUp':

                if (currentCharacter.hp < 100) {
                    let beforeHeal = currentCharacter.hp;
                    currentCharacter.hp += Number(tokenOne);
                    let afterHeal = currentCharacter.hp;

                    currentCharacter.hp = afterHeal > 100 ? 100 : currentCharacter.hp;

                    console.log(`${name} patched up and recovered ${currentCharacter.hp - beforeHeal} HP!`);
                    break;
                }

                console.log(`${name} is in full health!`);
            break;
        }
        
        command = input.shift();
    }

    characters.filter(x => x.hp > 0)
        .forEach(character => {
            console.log(`${character.name}`);
            console.log(` HP: ${character.hp}`);
            console.log(` Bullets: ${character.bullets}`);
        })
}

solve(
[
"2",
"Gus 100 0",
"Walt 100 6",
"FireShot - Gus - Bandit",
"TakeHit - Gus - 100 - Bandit",
"Reload - Walt",
"Ride Off Into Sunset"]
);

console.log('-------------------------');

solve(
["2",
"Jesse 100 4",
"Walt 100 5",
"FireShot - Jesse - Bandit",
 "TakeHit - Walt - 30 - Bandit",
 "PatchUp - Walt - 20" ,
 "Reload - Jesse",
 "Ride Off Into Sunset"]
);