function sumTable() {
    let prices = document.querySelectorAll('table td:nth-child(even):not(#sum)');

    let sum = 0;
    for(const price of prices){
        sum += Number(price.innerText);
    }

    document.getElementById('sum').innerText = sum;
}