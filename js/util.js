import {MESSAGE} from "./data";

// Функция для генерации случаного числа в заданном диапазоне
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция для генерации случаного 1 или 2 сообщений
const getRandomMessage = () => {
  let countMessage = getRandomInteger(1, 2);
  return countMessage === 2 ? MESSAGE[getRandomInteger(0, MESSAGE.length - 1)] + ' ' +
  MESSAGE[getRandomInteger(0, MESSAGE.length - 1)] : MESSAGE[getRandomInteger(0, MESSAGE.length - 1)];
}

export {getRandomInteger, getRandomMessage}
