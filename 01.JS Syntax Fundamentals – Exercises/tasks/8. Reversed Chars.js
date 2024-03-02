
function reverseChars(char_one, char_two, char_three){

    let string = (char_one + char_two + char_three).toString();
    let stringReversed = [];

    for(i = string.length - 1; i >= 0; i-- ){
        stringReversed.push(string[i]);
    }

    console.log(stringReversed.join(" "));
}

reverseChars('A', 'B', 'C')