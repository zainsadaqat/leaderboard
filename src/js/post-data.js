require('@babel/polyfill');

const id = '982X2Sxledkcq4ce1LDh';
const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;

const postData = async (user, score) => {
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({ user, score }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const jsonResponse = await response.json();
  return jsonResponse;
};

export default postData;
