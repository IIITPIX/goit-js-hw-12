import iziToast from 'izitoast';
import fetchData from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  hideLoadMoreButton,
  showLoadMoreButton,
} from './js/render-functions.js';

import 'izitoast/dist/css/iziToast.min.css';

const formElement = document.querySelector('.form');
const inputElement = formElement.querySelector('[name="search-text"]');
const loadMoreButton = document.querySelector('.load-more');
formElement.addEventListener('submit', handleSubmit);

let currentPage = 1;
let countPages = 1;
const countImagesPerPage = 15;

let inputtedText = '';

function handleSubmit(e) {
  currentPage = 1;
  e.preventDefault();
  clearGallery();
  showLoader();
  inputtedText = inputElement.value.trim();
  if (inputtedText) {
    let appData = [];
    fetchData(inputtedText, currentPage)
      .then(data => {
        countPages = data.totalHits / countImagesPerPage;
        appData = data.hits;
        createGallery(appData);
      })
      .catch(error => {
        iziToast.error({
          message: 'Something went wrong with request',
        });
      })
      .finally(() => {
        hideLoader();
        updateLoadMoreButton();
      });
  } else {
    hideLoader();
    iziToast.error({
      message: 'Please input some word',
    });
  }
}

loadMoreButton.addEventListener('click', handleLoadMoreButton);

function handleLoadMoreButton() {
  showLoader();
  fetchData(inputtedText, currentPage).then(data => {
    createGallery(data.hits);
    updateLoadMoreButton();
  });
  hideLoader();
}

function updateLoadMoreButton() {
  if (countPages <= currentPage) {
    hideLoadMoreButton();
    iziToast.error({
      message: "We're sorry, but you've reached the end of search results.",
    });
  } else {
    showLoadMoreButton();
    currentPage++;
    const cardElement = document.querySelector('.gallery-link');
    const cardSize = cardElement.getBoundingClientRect();
    window.scrollBy({ top: cardSize.height * 2, behavior: 'smooth' });
  }
}
