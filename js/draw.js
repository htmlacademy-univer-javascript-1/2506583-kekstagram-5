function renderPhotos(posts) {
  var list = document.querySelector(".pictures");
  var template = document.querySelector("#picture").content;
  var newTemplate = template.querySelector(".picture");
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < posts.length; i++) {
    var templateClone = newTemplate.cloneNode(true);
    var urlBlock = templateClone.querySelector('.picture__img');
    urlBlock.src = posts[i].url;
    urlBlock.alt = posts[i].description;
    var likesBlock = templateClone.querySelector('.picture__likes');
    likesBlock.innerHTML = posts[i].likes;
    var commentsBlock = templateClone.querySelector('.picture__comments');
    commentsBlock.innerHTML = posts[i].comments.length;
    fragment.appendChild(templateClone);
  }

  list.appendChild(fragment);
}

export { renderPhotos }
