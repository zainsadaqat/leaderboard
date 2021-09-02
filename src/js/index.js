import '../css/style.css';
import scoresList from './get-data.js';
import postData from './post-data.js';

require('@babel/polyfill');

const refresh = document.querySelector('#refresh');
const form = document.querySelector('#form');
const userInput = document.querySelector('#user');
const scoreInput = document.querySelector('#score');

scoresList();

refresh.addEventListener('click', () => {
  scoresList();
});

form.addEventListener('submit', (e) => {
  if (userInput.value === '' || scoreInput.value === '') {
    const dataMessage = document.querySelector('[data-message]');
    dataMessage.style.color = '#ff0000';
    dataMessage.classList.toggle('d-none');
    setTimeout(() => dataMessage.classList.toggle('d-none'), 3000);
  }

  postData(userInput.value, scoreInput.value);
  e.target.reset();
});
