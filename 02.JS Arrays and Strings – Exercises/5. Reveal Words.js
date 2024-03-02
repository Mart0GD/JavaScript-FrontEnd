
function solve(words, sentence){

    words = words.split(", ");

    let regex = /(\*)+/g;
    let censoredWords = sentence.matchAll(regex);

    for(const match of censoredWords){

        let wordLength = match[0].length;
        let word = words.filter(word => word.length === wordLength);

        sentence = sentence.replace(match[0], word);
    }

    console.log(sentence);
}

solve('great, learning',

'softuni is ***** place for ******** new programming languages')