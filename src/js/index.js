import '../css/style.css';
import scoresList from './get-data.js';
import postData from './post-data.js';

require('@babel/polyfill');

const leaderboard = document.querySelector('.leaderboard');
const refresh = document.querySelector('#refresh');
const form = document.querySelector('#form');
const userInput = document.querySelector('#user');
const scoreInput = document.querySelector('#score');
const message =
  '<h6 class="text-center">Fetch Data by clicking refresh button</h6>';

scoresList();

refresh.addEventListener('click', () => {
  scoresList();
  leaderboard.innerHTML = '';
});

form.addEventListener('submit', (e) => {
  postData(userInput.value, scoreInput.value);
  e.target.reset();
});
