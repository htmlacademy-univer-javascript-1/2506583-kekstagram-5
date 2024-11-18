import { openBigPicture } from './zoom.js';

function renderPhotos(posts) {
  const spisok = document.querySelector('.pictures');
  const template = document.querySelector('#picture').content;
  const newTemplate = template.querySelector('.picture');
  const fragment = document.createDocumentFragment();

  for (let x = 0; x < posts.length; x++) {
    const templateClone = newTemplate.cloneNode(true);
    const urlBlock = templateClone.querySelector('.picture__img');
    urlBlock.src = posts[x].url;
    urlBlock.alt = posts[x].description;
    urlBlock.dataset.likes = posts[x].likes;
    urlBlock.dataset.comments = posts[x].comments.length;

    urlBlock.dataset.commentsData = JSON.stringify(posts[x].comments);

    const likesBlock = templateClone.querySelector('.picture__likes');
    likesBlock.innerHTML = posts[x].likes;
    const commentsBlock = templateClone.querySelector('.picture__comments');
    commentsBlock.innerHTML = posts[x].comments.length;

    fragment.appendChild(templateClone);
  }

  spisok.appendChild(fragment);

  spisok.addEventListener('click', openBigPicture);
}

export { renderPhotos };
