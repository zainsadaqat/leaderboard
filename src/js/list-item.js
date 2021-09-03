const leaderboard = document.querySelector('.leaderboard');
const template = document.querySelector('#list-item-template');

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

export default listItem;
