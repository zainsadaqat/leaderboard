import '../css/style.css';
import scoresList from './get-data';
require('@babel/polyfill');

const leaderboard = document.querySelector('.leaderboard');
const message = `<h6 class="text-center">Fetch Data by clicking refresh button</h6>`;
leaderboard.innerHTML = message;
const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', () => {
  scoresList();
  leaderboard.innerHTML = ``;
});
