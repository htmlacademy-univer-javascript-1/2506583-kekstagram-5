import { isEscapeKey as isEscape } from './util.js';

const body = document.body;
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

let activeMessage;

const hideMessage = () => {
  if (!activeMessage) {
    return;
  }

  document.removeEventListener('keydown', onCloseMessageByEscape);
  body.removeEventListener('click', onCloseMessageByBodyClick);
  activeMessage.querySelector('.close-button').removeEventListener('click', hideMessage);
  activeMessage.remove();
  activeMessage = null;
};

function onCloseMessageByEscape(evt) {
  if (isEscape(evt)) {
    evt.preventDefault();
    hideMessage();
  }
}

function onCloseMessageByBodyClick(evt) {
  if (!evt.target.closest('.message-inner')) {
    hideMessage();
  }
}

const showMessage = (template, closeButtonSelector) => {
  if (activeMessage) {
    hideMessage();
  }

  const message = template.cloneNode(true);
  activeMessage = message;
  body.appendChild(message);

  document.addEventListener('keydown', onCloseMessageByEscape);
  body.addEventListener('click', onCloseMessageByBodyClick);
  message.querySelector(closeButtonSelector).addEventListener('click', hideMessage);
};

const showSuccessMessage = () => showMessage(successTemplate, '.success__button');

const showErrorMessage = () => showMessage(errorTemplate, '.error__button');

export { showSuccessMessage, showErrorMessage };

