import { getComment } from './data.js';
import { getRandomInteger } from './util.js';

export function generatePhoto(index){
  return {
    id: index,
    url: 'photos/${index}.jpg',
    description: 'Это описание картинки ${index}',
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
