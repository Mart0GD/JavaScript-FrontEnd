
function solve(input){

    let words = input.slice(1, input.length);
    let wordsToMatch = input[0].split(' ').reduce((acc, word) => ({...acc, [word]: 0}), {});

    words.forEach(word => {
        
        if (wordsToMatch.hasOwnProperty(word)) {
            wordsToMatch[word]++;
        }
    });

    Object.entries(wordsToMatch)
    .sort((a, b) => b[1]- a[1])
    .forEach(([word, accurances]) => console.log(`${word} - ${accurances}`));
}

solve([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
]);