import { getRandomInteger} from './util.js';

const NAMES = [
  'Петя',
  'Вася',
  'Катя',
  'Влад',
  'Егор',
  'Кирилл',
];

// Функция генерации случайного предложения для комментария
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Функция для генерации случаного 1 или 2 сообщений
function getRandomMessage(){
  const countMessage = getRandomInteger(1, 2);
  return countMessage === 2 ? MESSAGE[getRandomInteger(0, MESSAGE.length - 1)] + ' ' +
  MESSAGE[getRandomInteger(0, MESSAGE.length - 1)] : MESSAGE[getRandomInteger(0, MESSAGE.length - 1)];
}


const idSet = new Set();
const photoIdSet = new Set();

function getComment(){
  const idParam = getRandomInteger(1, 10000);
  const photoIdParam = getRandomInteger(1, 6);
  while(idSet.has(idParam)){
     idParam = getRandomInteger(1, 10000);
  }
  while(idSet.has(photoIdParam)){
     photoIdParam = getRandomInteger(1, 6);
  }

  return {
    id:  getRandomInteger(1, 10000) ,
    avatar: 'img/avatar-${getRandomInteger(1, 6)}.svg',
    message: getRandomMessage(),
    name: NAMES[getRandomInteger(0, NAMES.length - 1)]
  };
}

export {getComment}
