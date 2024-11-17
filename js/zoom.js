function openBigPicture(event) {
  if (!event.target.classList.contains('picture__img')) {
    return;
  }

  const picture = event.target;
  const bigPicture = document.querySelector('.big-picture');
  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  const caption = bigPicture.querySelector('.social__caption');
  const likesCount = bigPicture.querySelector('.likes-count');
  const commentsCount = bigPicture.querySelector('.comments-count');
  const commentsList = bigPicture.querySelector('.social__comments');

  bigPicture.classList.remove('hidden');

  bigPictureImg.src = picture.src;
  bigPictureImg.alt = picture.alt;
  caption.textContent = picture.alt;
  likesCount.textContent = picture.dataset.likes;
  commentsCount.textContent = picture.dataset.comments;

  const comments = JSON.parse(picture.dataset.commentsData);
  commentsList.innerHTML = '';

  comments.forEach((comment) => {
    const commentItem = document.createElement('li');
    commentItem.classList.add('social__comment');

    commentItem.innerHTML = `
      <img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35">
      <p class="social__text">${comment.message}</p>
    `;
    commentsList.appendChild(commentItem);
  });

  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');

  document.body.classList.add('modal-open');

  const closeButton = bigPicture.querySelector('.big-picture__cancel');
  closeButton.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });

  function onKeyDown(evt) {
    if (evt.key === 'Escape') {
      bigPicture.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  };

  document.addEventListener("keydown", onKeyDown);
}

export { openBigPicture };
