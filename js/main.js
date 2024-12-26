import { showFilteredPictures } from './filter.js';
import { getData } from './api.js';
import { displayAlert } from './util.js';
import './form.js';

const fetchPictures = async () => {
  try {
    showFilteredPictures(await getData());
  } catch (error){
    displayAlert(error);
  }
};

fetchPictures();


