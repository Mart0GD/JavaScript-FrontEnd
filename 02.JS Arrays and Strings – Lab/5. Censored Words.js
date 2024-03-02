
function solve(sentence, wordToCensor){

    let censored = sentence.replace(wordToCensor, repeat(wordToCensor.length));

    while(censored.includes(wordToCensor)){
        censored = censored.replace(wordToCensor, repeat(wordToCensor.length));
    }

    console.log(censored);

    function repeat(length){

        let censoredStars = "";
        for(let i = 0; i < length; i++){
            censoredStars += "*";
        }

        return censoredStars;
    }
}

solve('A word is a word', 'word')