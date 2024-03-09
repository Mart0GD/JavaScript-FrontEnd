
solve('a', 'd')

function solve(char1, char2){

    let startChar = smallerChar(char1, char2);
    let endChar = String.fromCharCode(startChar) === char1 ? char2.charCodeAt(0) : char1.charCodeAt(0);

    console.log(printInBetweenChars(startChar, endChar));

}

function smallerChar(cha1, char2){
    return Math.min(cha1.charCodeAt(0), char2.charCodeAt(0));
}

function printInBetweenChars(startChar, endChar){

    let chars = "";
    for(i = startChar + 1; i < endChar; i++){
        chars += String.fromCharCode(i);
    }

    return chars.split("").join(" ");
}

