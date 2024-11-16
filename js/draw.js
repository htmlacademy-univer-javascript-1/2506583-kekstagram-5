function renderPhotos(posts) {
  let spisok = document.querySelector('.pictures');
  let template = document.querySelector('#picture').content;
  let newTemplate = template.querySelector('.picture');
  let fragment = document.createDocumentFragment();

  for (let x = 0; x < posts.length; x++) {
    let templateClone = newTemplate.cloneNode(true);
    let urlBlock = templateClone.querySelector('.picture__img');
    urlBlock.src = posts[x].url;
    urlBlock.alt = posts[x].description;
    var likesBlock = templateClone.querySelector('.picture__likes');
    likesBlock.innerHTML = posts[x].likes;
    var commentsBlock = templateClone.querySelector('.picture__comments');
    commentsBlock.innerHTML = posts[x].comments.length;
    fragment.appendChild(templateClone);
  }

  spisok.appendChild(fragment);
}

export { renderPhotos }







