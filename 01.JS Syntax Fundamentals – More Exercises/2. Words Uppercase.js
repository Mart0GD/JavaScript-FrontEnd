
function solve(sentence){

    splitSentence = sentence.replace(/[^a-zA-Z0-9_]+/g, " ").toUpperCase().split(" ");

    if(splitSentence[splitSentence.length - 1] === ''){
        splitSentence.pop();
    }
    console.log(splitSentence.join(", "))

}

solve('Something.w2!');