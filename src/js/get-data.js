import listItem from './list-item.js';

require('@babel/polyfill');

const id = '982X2Sxledkcq4ce1LDh';
const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;

const scoresList = async () => {
  const response = await fetch(URL);
  const jsonResponse = await response.json();
  const results = jsonResponse.result;
  results.forEach((result) => {
    const { user, score } = result;
    listItem(user, score);
  });
};

export default scoresList;
