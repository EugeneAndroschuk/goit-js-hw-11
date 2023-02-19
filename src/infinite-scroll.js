import './css/styles.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import FetchImages from './fetchImages.js';
import throttle from 'lodash.throttle';

const form = document.getElementById('search-form');
const input = document.querySelector('input');
const cardList = document.querySelector('.gallery');
const spinner = document.querySelector('.spinner');
const fetchImages = new FetchImages();
const galleryOfImages = new SimpleLightbox('.gallery a');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const currentQuery = input.value.trim();

  if (currentQuery === '') return;

  cardList.innerHTML = '';
  fetchImages.resetPage();

  fetchImages.searchQuery = currentQuery;

  fetchImagesFoo();
}

async function fetchImagesFoo() {
  try {
    const response = await fetchImages.getImages();
    const arrayOfImages = response.data.hits;
    const maxAllowedAmountOfPages = Math.ceil(
      response.data.totalHits / fetchImages.perPage
    );

    if (response.data.totalHits === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }

    if (fetchImages.page === 1 && response.data.totalHits !== 0) {
      spinner.classList.remove('is-hidden');
      Notify.info(`Hooray! We found ${response.data.totalHits} images.`);
    }

    if (fetchImages.page === maxAllowedAmountOfPages) {
      spinner.classList.add('is-hidden');
      Notify.warning(
        "We're sorry, but you've reached the end of search results."
      );
    }

    if (response.data.totalHits !== 0) {
      const cardMarkup = arrayOfImages.map(image => {
        return `
                <div class="photo-card">
                      <a href="${image.largeImageURL}">
                          <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy"/>
                      </a>
                      <div class="info">
                           <p class="info-item"><b>Likes</b>${image.likes}</p>
                           <p class="info-item"><b>Views</b>${image.views}</p>
                           <p class="info-item"><b>Comments</b>${image.comments}</p>
                           <p class="info-item"><b>Downloads</b>${image.downloads}</p>
                      </div>
                </div>`;
      });
      cardList.insertAdjacentHTML('beforeend', cardMarkup.join(''));
      fetchImages.nextPage();

      galleryOfImages.refresh();
    }
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('scroll', throttle(() => onscroll(), 250));

function onscroll() {
  const documentRectangle = document.documentElement.getBoundingClientRect();
  
  if (documentRectangle.bottom < document.documentElement.clientHeight * 2) fetchImagesFoo();
}