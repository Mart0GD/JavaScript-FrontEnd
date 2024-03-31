function extractText() {
    const itemElements = document.querySelectorAll('#items li');
    const textFieldElement = document.getElementById('result');

    let list = []
    for(const item of itemElements){
        list.push(item.innerText)
    }

    textFieldElement.innerText = list.join(' ');
}