function renderPhotos(posts) {
  var spisok = document.querySelector(".pictures");
  var template = document.querySelector("#picture").content;
  var newTemplate = template.querySelector(".picture");
  var fragment = document.createDocumentFragment();

  for (var x = 0; x < posts.length; x++) {
    var templateClone = newTemplate.cloneNode(true);
    var urlBlock = templateClone.querySelector('.picture__img');
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







