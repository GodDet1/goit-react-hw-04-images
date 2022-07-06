const { default: axios } = require('axios');

const URL = 'https://pixabay.com/api/';
const KEY = '?key=27462846-29688f763242226098511123d';
const TYPE = '&image_type=photo&orientation=horizontal';
const PER_PAGE = '&per_page=12';
const PAGE = page => `&page=${page}`;
const SEARCH = text => `&q=${text}`;

const searchURL = (page, text) => {
  if (text !== '') {
    return URL + KEY + TYPE + PER_PAGE + PAGE(page) + SEARCH(text);
  }
  return URL + KEY + TYPE + PER_PAGE + PAGE(page);
};

export const fetchData = (page, text) => axios.get(searchURL(page, text));
