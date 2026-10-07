'use strict';

(() => {
  const answers = ['B', 'C', 'B', 'C', 'B', 'C', 'A', 'A', 'B', 'A', 'C'];
  const form = document.querySelector('#simulado-form');
  const questions = [...form.querySelectorAll('fieldset')];
  const progress = document.querySelector('#simulado-progress');
  const count = document.querySelector('#simulado-count');
  const result = document.querySelector('#simulado-result');
  const submit = document.querySelector('#simulado-submit');

  form.addEventListener('change', () => {
    const answered = form.querySelectorAll('input:checked').length;
    progress.value = answered;
    progress.textContent = `${answered} de ${answers.length}`;
    count.textContent = `${answered} de ${answers.length} respondidas`;
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    let score = 0;
    questions.forEach((question, index) => {
      const selected = question.querySelector('input:checked');
      const correct = selected.value === answers[index];
      if (correct) score++;
      question.querySelectorAll('input').forEach(input => {
        input.disabled = true;
        input.closest('label').classList.toggle('is-correct', input.value === answers[index]);
        input.closest('label').classList.toggle('is-incorrect', input.checked && !correct);
      });
      const feedback = question.querySelector('.simulado-feedback');
      feedback.textContent = correct
        ? `Resposta correta! Alternativa ${answers[index]}.`
        : `Você marcou ${selected.value}. Resposta correta: ${answers[index]}.`;
      feedback.hidden = false;
    });
    result.textContent = `Você acertou ${score} de ${answers.length} questões (${Math.round(score / answers.length * 100)}%). Confira o gabarito em cada questão acima.`;
    result.hidden = false;
    submit.disabled = true;
    result.focus();
  });

  form.addEventListener('reset', () => {
    form.querySelectorAll('input').forEach(input => { input.disabled = false; });
    form.querySelectorAll('.simulado-option').forEach(option => {
      option.classList.remove('is-correct', 'is-incorrect');
    });
    form.querySelectorAll('.simulado-feedback').forEach(feedback => { feedback.hidden = true; });
    result.hidden = true;
    result.textContent = '';
    submit.disabled = false;
    progress.value = 0;
    progress.textContent = `0 de ${answers.length}`;
    count.textContent = `0 de ${answers.length} respondidas`;
    questions[0].querySelector('input').focus();
  });
})();
