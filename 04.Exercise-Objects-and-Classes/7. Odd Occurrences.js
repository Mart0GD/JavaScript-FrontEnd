
function solve(input){

    let wordBook = {};

    input.toLowerCase()
    .split(" ")
    .forEach(word => {

        if (!wordBook.hasOwnProperty(word)) {
            wordBook[word] = 0;
        }
        
        wordBook[word]++;
    });

    console.log(Object.entries(wordBook).filter(([word, occurances]) => occurances % 2 != 0).map(([word, occurances]) => word).join(" "));

}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')