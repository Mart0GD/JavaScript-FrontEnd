
function solve(names){

    let sortedNames = names.sort((a,b) => {
        
        a = a.toLowerCase();
        b = b.toLowerCase();

        if(a > b){
            return 1;
        }
        else if(b > a){
            return -1
        }
        else{
            return 0;
        }
    });

    for(let i = 0; i < sortedNames.length; i++){
        console.log(`${i + 1}.${sortedNames[i]}`)
    }
}

solve(["John", "bob", "Christina", "Ema"])