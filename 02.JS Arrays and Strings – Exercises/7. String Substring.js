
function solve(word, sentence){

    let regex = new RegExp("\\b"+word+"\\b");

    if (regex.exec(sentence.toLowerCase())) {
        console.log(word);
    }
    else{
        console.log(`${word} not found!`);
    }
}

solve('javascript',

'sssssJavaScript is the best programming language')