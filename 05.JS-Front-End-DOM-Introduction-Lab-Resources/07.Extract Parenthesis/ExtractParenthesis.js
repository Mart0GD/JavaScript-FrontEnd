function extract(content) {

    let sentence = document.getElementById(content);

    let filter = /\((?<names>[A-Za-z ]+)\)/g
    let words = [...sentence.innerText.matchAll(filter)].map(x => x[1]);

    return words.join("; ")
}