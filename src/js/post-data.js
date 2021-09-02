const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/`;

const postData = (userInput, scoreInput) => {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: userInput.value,
      score: scoreInput.value,
    }),
  }).then((response) => response.json);
};

export default postData;
