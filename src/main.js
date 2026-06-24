import iziToast from 'izitoast';
import fetchData from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import 'izitoast/dist/css/iziToast.min.css';

const formElement = document.querySelector('.form');
const inputElement = formElement.querySelector('[name="search-text"]');
const loadMoreButton = document.querySelector('.load-more');
formElement.addEventListener('submit', handleSubmit);

let inputtedValue = '';

function handleSubmit(e) {
  e.preventDefault();
  loadMoreButton.classList.add('hidden');
  clearGallery();
  showLoader();
  const inputtedText = inputElement.value.trim();
  inputtedValue = inputtedText;
  if (inputtedText) {
    let appData = [];
    fetchData(inputtedText)
      .then(data => {
        if (data.hits.length === 15) {
          loadMoreButton.classList.remove('hidden');
        }
        if (data.hits.length === 0) {
          iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
        } else {
          appData = data.hits;
          console.log(appData);
          createGallery(appData);
        }
      })
      .catch(error => {
        iziToast.error({
          message: 'Something went wrong with request',
        });
      })
      .finally(() => hideLoader());
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
  fetchData(inputtedValue).then(data => {
    createGallery(data.hits);
    console.log(data.totalHits);
  });
  hideLoader();
}
