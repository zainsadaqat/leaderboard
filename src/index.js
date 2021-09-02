import './style.css';
require('@babel/polyfill');

const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/`;
const leaderboard = document.querySelector('.leaderboard');
const template = document.querySelector('#list-item-template');

// Create template of list and append them to the ul
const listItem = (user, score) => {
  const templateClone = template.content.cloneNode(true);
  const dataUser = templateClone.querySelector('[data-user]');
  dataUser.innerText = user;
  const dataScore = templateClone.querySelector('[data-score]');
  dataScore.innerText = score;
  const dataSection = templateClone.querySelector('[data-section]');
  dataSection.append(dataUser);
  dataSection.append(dataScore);
  const dataListItem = templateClone.querySelector('[data-list-item]');
  dataListItem.append(dataSection);
  leaderboard.append(dataListItem);
};

const scoresList = async () => {
  const response = await fetch(URL);
  const jsonResponse = await response.json();
  const results = jsonResponse.result;
  results.forEach((result) => {
    const { user, score } = result;
    listItem(user, score);
  });
};

scoresList();

// create modular functions
