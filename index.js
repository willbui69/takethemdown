
function toggleAnswer(questionNumber) {
    const answerElement = document.querySelectorAll('.faq-answer')[questionNumber - 1];
    answerElement.style.display = answerElement.style.display === 'none' ? 'block' : 'none';
}
