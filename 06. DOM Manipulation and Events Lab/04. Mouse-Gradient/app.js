function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const percentageElement = document.getElementById('result');

    gradient.addEventListener('mousemove', (e) => {
        let gradientWidth = e.target.clientWidth;

        percentageElement.textContent = Math.floor(e.offsetX/gradientWidth * 100) + '%'
    })
}