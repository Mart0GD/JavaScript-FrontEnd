function solve() {

  const answers = {
    0: 'low-value',
    1: 'high-value',
    2: 'low-value'
  }

  const sections = document.querySelectorAll('section');

  let rightAnswers = 0;
  for(let i = 0; i < sections.length; i++){
    let currentSection = sections[i];

    currentSection.addEventListener('click', (e) => {

      if (e.target.classList.contains('answer-text')) {
        e.currentTarget.style.display = 'none';

        rightAnswers += e.target.parentElement.parentElement.classList.contains(answers[i]) ? 1 : 0;

        if (i + 1 < sections.length) {
          sections[i + 1].style.display = 'block';
        }
        else{
          document.querySelector('#results').style.display = 'block';
          document.querySelector('#results h1').textContent = rightAnswers === 3 ? "You are recognized as top JavaScript fan!" : `You have ${rightAnswers} right answers`;
        }
      }
    })

  }
}
