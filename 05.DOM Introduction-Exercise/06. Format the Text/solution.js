function solve() {
  const inputSentences = document.getElementById('input').value.split('.').filter(x => x.length > 0);
  const resultField = document.getElementById('output');

  let resultParagraphs = [];
  let paragraph = document.createElement('p');
  for(i = 1; i <= inputSentences.length; i++){

    paragraph.textContent += inputSentences[i - 1] + '.';

    if (i % 3 === 0 || i == inputSentences.length) {
      resultParagraphs.push(paragraph)
      paragraph = document.createElement('p');
    }
  }

  resultParagraphs.forEach(paragraph => {
    resultField.appendChild(paragraph);
  })
}