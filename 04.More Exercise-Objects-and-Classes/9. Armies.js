
function solve(input){

    leadersDictionary = {};

    for(const command of input){

        if (!command.includes("+")) {
            checkLeaderCommands(command, leadersDictionary);
            continue;
        }

        addArmy(command, leadersDictionary);
    }

    Object.entries(leadersDictionary)
          .sort(([leaderA, armyA], [leaderB, armyB]) => Object.entries(armyB).reduce((acc, [army, count]) => acc+= count, 0) - Object.entries(armyA).reduce((acc, [army, count]) => acc+= count, 0))
          .forEach(([leader, armies]) => {
            armies = Object.entries(armies);

            console.log(`${leader}: ${armies.reduce((acc, [army, count]) => acc+= count,0)}`);

            for(const [armyName, armyCount] of armies.sort(([armyA, countA], [armyB, countB]) => countB - countA)){
                console.log(`>>> ${armyName} - ${armyCount}`);
            }
            
          });

}

function checkLeaderCommands(command, leadersDictionary){
    const arriveCommand = " arrives";
    const defeatedCommand = " defeated";

    if (command.includes(arriveCommand)) {
        let leader = command.split(arriveCommand).filter(x => x.length != 0)[0];

        leadersDictionary[leader] = {};
    }
    else if(command.includes(defeatedCommand)){
        let leader = command.split(defeatedCommand).filter(x => x.length != 0)[0];

        delete leadersDictionary[leader];
    }
    else{
        let [leader, armyInfo] = command.split(": ")
        let [armyName, armyCount] = armyInfo.split(", ");

        let leaderObject = leadersDictionary[leader]
        if (leaderObject) {
            leaderObject[armyName] = Number(armyCount);
        }
    }
}

function addArmy(armyInfo, leadersDictionary){
    let [armyName, armyCount] = armyInfo.split(" + ");

    let army = Object.values(leadersDictionary).find(x => x.hasOwnProperty(armyName));

    if (army) {
        army[armyName] += Number(armyCount);
    }
}


solve([
'Rick Burr arrives', 
'Fergus: Wexamp, 30245', 
'Rick Burr: Juard, 50000', 
'Findlay arrives',
'Findlay: Britox, 34540',
'Wexamp + 6000', 
'Juard + 1350', 
'Britox + 4500', 
'Porter arrives',
'Porter: Legion, 55000', 
'Legion + 302', 
'Rick Burr defeated',
'Porter: Retix, 3205'
])
console.log("-----------");
solve(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])