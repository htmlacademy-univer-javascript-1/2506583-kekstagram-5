import { generatePhoto } from './generate-photo.js';

// Создание массива объектов фотографий
const posts = [];
for(let i = 1; i <= 25; i++){
  const currentPhoto = generatePhoto(i);
  currentPhoto.generateComments();
  posts.push(currentPhoto);
  }


