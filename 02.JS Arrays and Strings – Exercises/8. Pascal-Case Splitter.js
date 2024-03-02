
function solve(sentence){

    let splitWords = [];

    
    let wordStartIndex = -1;
    let wordEndIndex = -1;
    for(i = 0; i < sentence.length; i++){

        if(sentence[i] >= 'A' && sentence[i] <= 'Z'){
            if(i != 0){
                let word = sentence.slice(wordStartIndex,wordEndIndex + 1);
                splitWords.push(word);
                wordEndIndex = i;
            }
            wordStartIndex = i;
        }
        else{
            wordEndIndex = i;
        }

    }

    let word = sentence.slice(wordStartIndex,sentence.length);
    splitWords.push(word);

    console.log(splitWords.join(", "));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCanCCCCC');