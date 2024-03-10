
function solve(rows){
    const letters = 
    [
        ["A", "T"],
        ["C", "G"],
        ["T", "T"],
        ["A", "G"],
        ["G", "G"]
    ]

    const pattern = [
        (letter1, letter2) => `**${letter1}${letter2}**`,
        (letter1, letter2) => `*${letter1}--${letter2}*`,
        (letter1, letter2) => `${letter1}----${letter2}`,
        (letter1, letter2) => `*${letter1}--${letter2}*`,
    ]

    patternCount = 0;
    lettersCount = 0;
    for(i = 0; i < rows; i++){
        
        let currentLetters = letters[i % letters.length];
        let currentPattern = pattern[i % pattern.length];

        console.log((currentPattern(currentLetters[0],currentLetters[1])));
    }

}

solve(4);