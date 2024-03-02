
function solve(sentence){

    let regex = /#(?<content>[A-z]+)\b/g;

    let matches = sentence.matchAll(regex);

    for(const match of matches){
        console.log(match[1]);
    }
}

solve('The symbol # is known #variously in English-speaking #regions as the #number sign');