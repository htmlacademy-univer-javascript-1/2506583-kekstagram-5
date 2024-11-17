function openBigPicture(event) {
  // Проверяем, что клик был именно по изображению, а не по другим элементам
  if (!event.target.classList.contains('picture__img')) {
    return;
  }

  const picture = event.target;  // Миниатюра изображения
  const bigPicture = document.querySelector('.big-picture');  // Модальное окно с полноэкранной картинкой
  const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
  const caption = bigPicture.querySelector('.social__caption');
  const likesCount = bigPicture.querySelector('.likes-count');
  const commentsCount = bigPicture.querySelector('.comments-count');
  const commentsList = bigPicture.querySelector('.social__comments');

  // Открываем модальное окно
  bigPicture.classList.remove('hidden');

  // Заполняем данные о фотографии
  bigPictureImg.src = picture.src;  // Устанавливаем src изображения
  bigPictureImg.alt = picture.alt;  // Устанавливаем alt для изображения
  caption.textContent = picture.alt;  // Описание фотографии
  likesCount.textContent = picture.dataset.likes;  // Количество лайков
  commentsCount.textContent = picture.dataset.comments;  // Количество комментариев

  // Наполняем список комментариев
  const comments = JSON.parse(picture.dataset.commentsData);  // Считываем комментарии (предположим, они уже передаются в данных)
  commentsList.innerHTML = '';  // Очищаем старые комментарии

  comments.forEach(comment => {
    const commentItem = document.createElement('li');
    commentItem.classList.add('social__comment');

    commentItem.innerHTML = `
      <img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35">
      <p class="social__text">${comment.message}</p>
    `;
    commentsList.appendChild(commentItem);
  });

  // Скрываем элементы счётчика комментариев и кнопки загрузки новых комментариев
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');

  // Добавляем класс modal-open для блокировки прокрутки страницы
  document.body.classList.add('modal-open');

  // Закрытие модального окна
  const closeButton = bigPicture.querySelector('.big-picture__cancel');
  closeButton.addEventListener('click', () => {
    bigPicture.classList.add('hidden');  // Закрываем окно
    document.body.classList.remove('modal-open');  // Убираем блокировку прокрутки
  });

  document.addEventListener("keydown", function(evt){
    if(evt.keyCode === 27){
      bigPicture.classList.add('hidden');
    }
  })
}

export { openBigPicture };
