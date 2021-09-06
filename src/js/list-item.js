const table = document.querySelector('.leaderboard-table');
const template = document.querySelector('#list-item-template');

const listItem = (user, score) => {
  const templateClone = template.content.cloneNode(true);
  const dataUser = templateClone.querySelector('[data-user]');
  dataUser.innerText = user;
  const dataScore = templateClone.querySelector('[data-score]');
  dataScore.innerText = score;
  const dataListItem = templateClone.querySelector('[data-list-item]');
  dataListItem.append(dataUser);
  dataListItem.append(dataScore);
  table.append(dataListItem);
};

export default listItem;
