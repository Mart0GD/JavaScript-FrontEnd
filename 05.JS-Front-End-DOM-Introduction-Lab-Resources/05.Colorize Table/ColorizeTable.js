function colorize() {
    let a = document.querySelectorAll('table tr:nth-child(even)');

    for(const element of a){
        element.style.backgroundColor = 'teal';
    }
}