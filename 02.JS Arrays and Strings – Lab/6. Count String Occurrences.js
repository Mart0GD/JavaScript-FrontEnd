
function solve(sentence, exactWord){

    let sentenceArr = sentence.split(" ");
    let wordCount = 0;
    for( let word of sentenceArr){
        if (word === exactWord) {
            wordCount++;
        }
    }

    console.log(wordCount);
}

solve('This is a word and it also is a sentence',

'is')