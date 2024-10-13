import  {getRandomInteger, getRandomMessage} from "./util.js"
import {NAMES} from "./data.js";


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
      comments: getComments(),
    }
}

function getComments(){
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

export {iteratePosts}
