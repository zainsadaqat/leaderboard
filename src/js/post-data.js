require('@babel/polyfill');

const id = `982X2Sxledkcq4ce1LDh`;
const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;

const postData = async (user, score) => {
  await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({ user, score }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => data);
};

export default postData;
