const NAMES = [
  'Петя',
  'Вася',
  'Катя',
  'Влад',
  'Егор',
  'Кирилл',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

// Функция для генерации случаного 1 или 2 сообщений
const getRandomMessage = () => {
  let countMessage = getRandomInteger(1, 2);
  return countMessage === 2 ? MESSAGE[getRandomInteger(0, MESSAGE.length - 1)] + ' ' +
  MESSAGE[getRandomInteger(0, MESSAGE.length - 1)] : MESSAGE[getRandomInteger(0, MESSAGE.length - 1)];
}

// Функция для генерации случаного числа в заданном диапазоне
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

let idSet = new Set();
let photoIdSet = new Set();

//функция для создания комментария с уникальным id И id аватара
const getComment = () => {
  let idParam = getRandomInteger(1, 10000);
  let photoIdParam = getRandomInteger(1, 6);
  while(idSet.has(idParam)){
     idParam = getRandomInteger(1, 10000);
  }
  while(idSet.has(photoIdParam)){
     photoIdParam = getRandomInteger(1, 6);
  }

  return {
    id:  getRandomInteger(1, 10000) ,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomMessage(),
    name: NAMES[getRandomInteger(0, NAMES.length - 1)]
  };
}

function generatePhoto(index){
    return {
      id: index,
      url: `photos/${index}.jpg`,
      description: `Это описание картинки ${index}`,
      likes: getRandomInteger(15, 200),
      comments: getCountComments(),
    }
}

function getCountComments(){
  let limit = getRandomInteger(1, 30);
  let commentsArr =[]
  for (let x = 1; x <= limit; x++ ){
    commentsArr.push(getComment())
  }
  return commentsArr;
}

//функция, которая прогоняет id от 1 до 25,
//получая массив всех фотографий
const iteratePosts = () => {
  let posts = [];
  for(let i = 1; i <= 25; i++){
    posts.push(generatePhoto(i));
  }
  return posts;
}

