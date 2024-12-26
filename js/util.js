const ERROR_SHOWING_TIME = 5000;

const displayAlert = (message) => {
  const alertBlockElement = document.createElement('div');
  alertBlockElement.style.zIndex = '100';
  alertBlockElement.style.position = 'absolute';
  alertBlockElement.style.left = '0';
  alertBlockElement.style.top = '0';
  alertBlockElement.style.right = '0';
  alertBlockElement.style.padding = '10px 3px';
  alertBlockElement.style.fontSize = '30px';
  alertBlockElement.style.textAlign = 'center';
  alertBlockElement.style.backgroundColor = 'red';
  alertBlockElement.textContent = message;
  document.body.append(alertBlockElement);

  setTimeout(() => {
    alertBlockElement.remove();
  }, ERROR_SHOWING_TIME);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const getRandomInt = (val1, val2) => {
  const lower = Math.ceil(Math.min(val1, val2));
  const upper = Math.floor(Math.max(val1, val2));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElements = (arr, count) => {
  const randomIndexList = [];
  const max = Math.min(count, arr.length);

  while (randomIndexList.length < max) {
    const id = getRandomInt(0, arr.length - 1);
    if (!randomIndexList.includes(id)) {
      randomIndexList.push(id);
    }
  }

  return randomIndexList.map((id) => arr[id]);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export { getRandomInt, getRandomElements, isEscapeKey, displayAlert, debounce };

