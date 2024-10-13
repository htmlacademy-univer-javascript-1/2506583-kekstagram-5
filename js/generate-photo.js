import { NAMES } from './data.js';
import { getRandomMessage, getRandomInteger } from './util.js';

const idSet = new Set();
const photoIdSet = new Set();

const getComment = () => {
  let idParam = getRandomInteger(1, 10000);
  let photoIdParam = getRandomInteger(1, 6);

  while (idSet.has(idParam)) {
    idParam = getRandomInteger(1, 10000);
  }

  return {
    id: getRandomInteger(1, 10000),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomMessage(),
    name: NAMES[getRandomInteger(0, NAMES.length - 1)]
  };
};

function generatePhoto(index) {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: `Это описание картинки ${index}`,
    likes: getRandomInteger(15, 200),
    comments: getCountComments()
  };
}

function getCountComments() {
  const limit = getRandomInteger(1, 30);
  const commentsArr = [];

  for (let x = 1; x <= limit; x++) {
    commentsArr.push(getComment());
  }

  return commentsArr;
}

export const iteratePosts = () => {
  const posts = [];

  for (let i = 1; i <= 25; i++) {
    posts.push(generatePhoto(i));
  }

  return posts;
};
