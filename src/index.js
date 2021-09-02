import './style.css';
require('@babel/polyfill');

const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/`;

const scoresList = async () => {
  const response = await fetch(URL);
  const jsonResponse = await response.json();
  const results = jsonResponse.result;
  results.forEach((result) => {
    const { user, score } = result;
  });
};

scoresList();

// Create template of list and append them to the ul
// create modular functions
