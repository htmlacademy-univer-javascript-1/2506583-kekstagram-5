import { MESSAGE } from './data.js';

export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getRandomMessage = () => {
  const countMessage = getRandomInteger(1, 2);
  return countMessage === 2 ? `${MESSAGE[getRandomInteger(0, MESSAGE.length - 1)]} ${MESSAGE[getRandomInteger(0, MESSAGE.length - 1)]}` : MESSAGE[getRandomInteger(0, MESSAGE.length - 1)];
};
